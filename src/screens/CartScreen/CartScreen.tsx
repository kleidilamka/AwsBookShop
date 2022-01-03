import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataStore, Auth, Predicates } from "aws-amplify";
import { FontAwesome } from "@expo/vector-icons";

import { Product, CartProduct } from "../../models";
import CartProductItem from "../../components/CartProductItem";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import { ModelPredicate } from "@aws-amplify/datastore";

// import products from '../../data/cart';
type NavigationProps = StackNavigationProp<RootStackParamsList, "Address">;
const CartScreen = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation<NavigationProps>();

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items

    const cartItem = await DataStore.query(CartProduct, (cp: any) =>
      cp.userSub("eq", userData.attributes.sub)
    );

    setCartProducts(cartItem);
  };

  useEffect(() => {
    fetchCartProducts();
    console.log();
    return () => {
      setCartProducts([]);
    };
  }, []);

  useEffect(() => {
    if (cartProducts.filter((cp) => !cp.Product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map((cartProduct: CartProduct | any) =>
          DataStore.query(Product, cartProduct.cartProductProductId)
        )
      );

      // assign the products to the cart items
      setCartProducts((currentCartProducts: CartProduct[]) =>
        currentCartProducts.map((cartProduct: CartProduct | any) => ({
          ...cartProduct,
          product: products.find(
            (p: any) => p.id === cartProduct.cartProductProductId
          ),
        }))
      );
    };

    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    const subscription = DataStore.observe(CartProduct).subscribe((msg: any) =>
      fetchCartProducts()
    );
    return subscription.unsubscribe;
  }, []);

  useEffect(() => {
    const subscriptions = cartProducts.map((cp) =>
      DataStore.observe(CartProduct, cp.cartProductProductId).subscribe(
        (msg: any) => {
          if (msg.opType === "UPDATE") {
            setCartProducts((curCartProducts) =>
              curCartProducts.map((cp) => {
                if (cp.id !== msg.element.id) {
                  console.log("different id");
                  return cp;
                }
                return {
                  ...cp,
                  ...msg.element,
                };
              })
            );
          }
        }
      )
    );

    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce(
    (summedPrice: number, product: CartProduct) =>
      summedPrice + (product?.Product?.price || 0) * product?.quantity!,
    0
  );

  const onCheckout = () => {
    navigation.navigate("Address", { totalPrice });
  };

  const onDeleteAll = async () => {
    DataStore.delete(CartProduct, Predicates.ALL);
  };

  if (cartProducts.filter((cp) => !cp.Product).length !== 0) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {/* Render Product Component */}
      <FlatList
        style={{ marginTop: 10 }}
        data={cartProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartProductItem
            fetchCartProducts={fetchCartProducts}
            key={item.id}
            cartItem={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Text style={[styles.subTotalPrice, { color: theme.color }]}>
            {`Subtotal ${cartProducts.length} items: `}
            <Text style={{ color: theme.error }}>${totalPrice.toFixed(2)}</Text>
          </Text>
        )}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.deleteBtn, { backgroundColor: theme.backgroundCard }]}
          onPress={onDeleteAll}
        >
          <FontAwesome name="trash-o" color={theme.iconBgColor} size={23} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buyBtn, { backgroundColor: theme.iconBgColor }]}
          onPress={onCheckout}
        >
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

import React, { useContext } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import QuantitySelector from "../QuantitySelector";
import styles from "./styles";
import { DataStore } from "aws-amplify";

import { CartProduct } from "../../models";
import { ThemeContext } from "../../contexts/themeContext";
import { Auth } from "aws-amplify";

interface CartProductItemProps {
  cartItem: CartProduct;
  fetchCartProducts: () => {};
}

const CartProductItem = (props: CartProductItemProps) => {
  const { cartItem, fetchCartProducts } = props;
  const { ...cartProduct } = cartItem;
  const { theme } = useContext(ThemeContext);

  const updateQuantity = async (newQuantity: number) => {
    const original = await DataStore.query(CartProduct, cartProduct.id);

    await DataStore.save(
      CartProduct.copyOf(original, (updated) => {
        updated.quantity = newQuantity;
      })
    );
  };

  const deleteOne = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!cartItem || !userData) {
      return;
    }

    const selectedCartItem = await DataStore.query(CartProduct, cartItem.id);
    await DataStore.delete(selectedCartItem);

    fetchCartProducts();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundCard,
          shadowColor: theme.shadowColor,
        },
      ]}
    >
      <Image
        style={styles.image}
        source={{ uri: cartProduct?.Product?.image }}
      />
      <View style={styles.middleContainer}>
        <Text style={[styles.title, { color: theme.color }]} numberOfLines={3}>
          {cartProduct?.Product?.title}
        </Text>
        {/* Ratings
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${product?.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(product.avgRating) ? "star" : "star-o"}
              size={17}
              color={"#3faa97"}
            />
          ))}
        </View> */}
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.price, { color: theme.color }]}>
          from ${cartProduct?.Product?.price?.toFixed(2)}
          {cartProduct?.Product?.oldPrice && (
            <Text style={[styles.oldPrice, { color: theme.error }]}>
              {" "}
              ${cartProduct?.Product?.oldPrice.toFixed(2)}
            </Text>
          )}
        </Text>
        <QuantitySelector
          quantity={cartProduct.quantity}
          setQuantity={updateQuantity}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.deleteOneBtn,
          {
            backgroundColor: theme.iconBgColor,
            borderColor: theme.iconBgColor,
          },
        ]}
        onPress={deleteOne}
      >
        <FontAwesome
          name="trash-o"
          color={"white"}
          size={28}
          style={[
            {
              backgroundColor: theme.iconBgColor,
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartProductItem;

import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from "react-native";
import { Auth, DataStore } from "aws-amplify";
import { Product, CartProduct, BookmarkProduct } from "../../models";
import ProductDetailsTop from "../../components/ProductDetailsTop";
import ProductDetailsBottom from "../../components/ProductDetailsBottom";
import { ThemeContext } from "../../contexts/themeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamsList } from "../../navigation/navigationTypes";

type NavigationProps = StackNavigationProp<RootStackParamsList, "Cart">;

const ProductDetailsScreen = () => {
  const { theme } = useContext(ThemeContext);
  const route = useRoute();
  const navigation = useNavigation<NavigationProps>();

  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState(1);

  const { item }: object | any = route.params;

  useEffect(() => {
    if (!item.id) {
      return;
    }
    DataStore.query(Product, item.id).then(setProduct);
    console.log(item.id);
  }, [item.id]);

  useEffect(() => {
    if (product) {
      setSelectedOption("j");
    }
  }, [product]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      cartProductProductId: product.id,
    });

    console.log(newCartProduct);

    await DataStore.save(newCartProduct);
    navigation.navigate("Cart");
  };

  const onAddToBookmark = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    if (!product || !userData) {
      return;
    }

    const newBookmarkProduct = new BookmarkProduct({
      userSub: userData.attributes.sub,
      quantity,
      bookmarkProductProductId: product?.id,
      isBookmarked: true,
    });

    await DataStore.save(newBookmarkProduct);
    console.log(newBookmarkProduct);

    navigation.navigate("Bookmarks");
  };

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: theme.backgroundColor,
        alignItems: "center",
      }}
    >
      <ProductDetailsTop item={product} />
      <ProductDetailsBottom
        onAddToCart={onAddToCart}
        onAddToBookmark={onAddToBookmark}
        item={product}
      />
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

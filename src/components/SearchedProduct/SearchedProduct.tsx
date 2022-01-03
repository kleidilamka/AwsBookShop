import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import { Rating } from "react-native-ratings";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import { CartProduct } from "../../models";
import { BookmarkProduct } from "../../models";

interface SearchedProductProps {
  product: Product;
  onAddToCart: () => {};
}

type NavigationProps = StackNavigationProp<RootStackParamsList>;

const SearchedProduct = ({ product }: SearchedProductProps) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProps>();

  const [quantity, setQuantity] = useState(1);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }

    const singleProduct: Product = await DataStore.query(Product, product.id);

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      productID: singleProduct.id,
    });

    await DataStore.save(newCartProduct);
    console.log(newCartProduct);
    navigation.navigate("Cart");
  };

  const onAddToBookmark = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }

    const singleProduct: Product = await DataStore.query(Product, product.id);

    const newBookmarkProduct = new BookmarkProduct({
      userSub: userData.attributes.sub,
      quantity,
      productID: singleProduct.id,
    });

    await DataStore.save(newBookmarkProduct);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundCard,
          shadowColor: theme.shadowColor,
        },
      ]}
      onPress={onAddToCart}
    >
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.middleContainer}>
        <Text style={[styles.title, { color: theme.color }]} numberOfLines={3}>
          {product.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          <Rating
            type="custom"
            // ratingImage={WATER_IMAGE}
            ratingColor={theme.iconBgColor}
            ratingBackgroundColor="#c8c7c8"
            startingValue={product.avgRating}
            ratingCount={5}
            tintColor={theme.backgroundCard}
            imageSize={20}
            readonly={true}
            fractions={1}
            minValue={1}
            // onFinishRating={}
            style={{ marginBottom: 5 }}
          />
        </View>
      </View>
      <View style={styles.leftContainer}>
        <Text style={[styles.price, { color: theme.color }]}>
          ${product?.price?.toFixed(2)}
        </Text>
        {product?.oldPrice && (
          <Text style={[styles.oldPrice, { color: theme.error }]}>
            {" "}
            ${product?.oldPrice.toFixed(2)}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.addBookmarkBtn,
          {
            backgroundColor: theme.iconBgColor,
            borderColor: theme.iconBgColor,
          },
        ]}
        onPress={onAddToBookmark}
      >
        <FontAwesome
          name={"bookmark-o"}
          color={"white"}
          size={28}
          style={[
            {
              backgroundColor: theme.iconBgColor,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.addToCartBtn,
          {
            backgroundColor: theme.iconBgColor,
            borderColor: theme.iconBgColor,
          },
        ]}
        onPress={onAddToCart}
      >
        <Ionicons
          name="ios-cart-outline"
          color={"white"}
          size={28}
          style={[
            {
              backgroundColor: theme.iconBgColor,
            },
          ]}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SearchedProduct;

import React, { useContext, useEffect, useState } from "react";
import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { BookmarkProduct, Product } from "../../models";
import { Rating } from "react-native-ratings";
import {} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { Auth } from "aws-amplify";

interface BookmarkProductItemProps {
  bookmarkItem: BookmarkProduct;
  fetchBookmarkProducts: () => {};
}

const BookmarkProductItem = (props: BookmarkProductItemProps) => {
  //   console.log(bookmarkItem);
  const { bookmarkItem, fetchBookmarkProducts } = props;
  const { product } = bookmarkItem;
  const { theme } = useContext(ThemeContext);
  const [selectedId, setSelectedId] = useState("");

  //Select id of item
  useEffect(() => {
    setSelectedId(bookmarkItem.id);

    return () => {
      setSelectedId("");
    };
  }, []);

  const deleteOne = async () => {
    //Check for authenticated user
    const userData = await Auth.currentAuthenticatedUser();

    if (!bookmarkItem || !userData) {
      return;
    }

    //Query bookmark by id
    const selectedBookmark = await DataStore.query(
      BookmarkProduct,
      bookmarkItem.id
    );

    //Delete SelectedBookmark
    await DataStore.delete(selectedBookmark);

    fetchBookmarkProducts();
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
      <Image style={styles.image} source={{ uri: product?.image }} />
      <View style={styles.middleContainer}>
        <Text style={[styles.title, { color: theme.color }]} numberOfLines={3}>
          {product?.title}
        </Text>
        {/* Ratings */}
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
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.price, { color: theme.color }]}>
          from ${product?.price?.toFixed(2)}
          {product?.oldPrice && (
            <Text style={[styles.oldPrice, { color: theme.error }]}>
              {" "}
              ${product?.oldPrice.toFixed(2)}
            </Text>
          )}
        </Text>
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

export default BookmarkProductItem;

import React, { useState, useEffect, useContext } from "react";
import { FlatList, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { DataStore, Auth, Predicates } from "aws-amplify";

import { Product, BookmarkProduct } from "../../models";
import BookmarkProductItem from "../../components/BookmarkProductItem";
import { ThemeContext } from "../../contexts/themeContext";
import { useNavigation } from "@react-navigation/native";

const BookmarksScreen = () => {
  const [bookmarksProduct, setBookmarksProduct] = useState<BookmarkProduct[]>(
    []
  );
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      fetchBookmarkProducts();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  const fetchBookmarkProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items
    DataStore.query(BookmarkProduct, (cp) =>
      cp.userSub("eq", userData.attributes.sub)
    ).then(setBookmarksProduct);
  };

  useEffect(() => {
    fetchBookmarkProducts();
    return () => {
      setBookmarksProduct([]);
    };
  }, []);

  useEffect(() => {
    if (bookmarksProduct.filter((cp) => !cp.Product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        bookmarksProduct.map((bookmarksProduct) =>
          DataStore.query(Product, bookmarksProduct?.id)
        )
      );

      // assign the products to the cart items
      setBookmarksProduct((currentBookmarkProduct) =>
        currentBookmarkProduct.map((bookmarkProduct) => ({
          ...bookmarkProduct,
          product: products.find((p) => p.id === bookmarkProduct?.id),
        }))
      );

      return () => {
        setBookmarksProduct([]);
      };
    };

    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {/* Render Product Component */}
      <FlatList
        style={{ marginTop: 10 }}
        data={bookmarksProduct}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookmarkProductItem
            key={item.id}
            bookmarkItem={item}
            fetchBookmarkProducts={fetchBookmarkProducts}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BookmarksScreen;

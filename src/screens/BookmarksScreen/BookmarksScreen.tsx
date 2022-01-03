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

    // TODO query only my bookmarks items
    const bookmarkedItem = await DataStore.query(BookmarkProduct, (cp: any) =>
      cp.userSub("eq", userData.attributes.sub)
    );

    setBookmarksProduct(bookmarkedItem);
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
      // create a new order
      // fetch all cart items

      // query all products that are used in bookmarks
      const products = await Promise.all(
        bookmarksProduct.map((bookmarkProduct: BookmarkProduct | any) =>
          DataStore.query(Product, bookmarkProduct.bookmarkProductProductId)
        )
      );
      // assign the products to the bookmarks items

      setBookmarksProduct((currentBookmarkedProducts: any) =>
        currentBookmarkedProducts.map(
          (bookmarkProduct: BookmarkProduct | any) => ({
            product: products.find(
              (p: any) => p.id === bookmarkProduct.bookmarkProductProductId
            ),
          })
        )
      );
    };

    fetchProducts();

    return () => {
      setBookmarksProduct([]);
    };
  }, [bookmarksProduct]);

  if (
    bookmarksProduct.filter((cp: BookmarkProduct) => !cp.Product).length !== 0
  ) {
    return <ActivityIndicator />;
  }

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

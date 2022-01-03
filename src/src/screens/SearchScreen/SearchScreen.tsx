import { ConsoleLogger } from "@aws-amplify/core";
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, Text, TextInput } from "react-native";
import SearchedProduct from "../../components/SearchedProduct";
import { ThemeContext } from "../../contexts/themeContext";
import { CartProduct } from "../../models";
import { Product } from "../../models";
import styles from "./styles";

const SearchScreen = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  //fetch all products
  const fetchProducts = async () => {
    const allProducts = await DataStore.query(Product);
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  };

  //Search your product
  const searchProduct = (text: string) => {
    setFilteredProducts(
      products.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {/* Render Product Component */}
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        onChangeText={(text) => searchProduct(text)}
      />
      <FlatList
        style={{ marginTop: 10 }}
        data={filteredProducts}
        extraData={products}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <SearchedProduct key={item.id} product={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

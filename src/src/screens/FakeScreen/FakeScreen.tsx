import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import FakeScreenComponent from "../../components/FakeScreenComponent";
import { ThemeContext } from "../../contexts/themeContext";
import { CartProduct } from "../../models";
import { Product } from "../../models";

const FakeScreen = () => {
  const [products, setProducts] = useState([]);

  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const [product, setProduct] = useState<Product | undefined>(undefined);

  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {}, []);

  // const onAddToCart = async () => {
  //   const userData = await Auth.currentAuthenticatedUser();

  //   // const product: Product | undefined = (
  //   //   await DataStore.query(Product)
  //   // ).filter((cp: any) => cp.id === !products.id);

  //   // console.log(product);
  //   // console.log(`${selectedId.id} ${selectedId.title}`);

  //   // if (!product || !userData) {
  //   //   return;
  //   // }

  //   // const newCartProduct = new CartProduct({
  //   //   userSub: userData.attributes.sub,
  //   //   quantity,
  //   //   productID: product?.id,
  //   // });

  //   // await DataStore.save(newCartProduct);
  //   // navigation.navigate("Cart");
  // };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const allProducts = await DataStore.query(Product);
    setProducts(allProducts);
    console.log(products);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <FakeScreenComponent item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FakeScreen;

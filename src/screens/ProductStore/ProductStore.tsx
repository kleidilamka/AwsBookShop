import React, { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import { DataStore } from "aws-amplify";
import { Product } from "../../models";
import ProductItem from "../../components/ProductItem";
import Banner from "../../components/Banner";
import CategoryFilter from "../../components/CategoryFilter";
import { Category } from "../../models";
import { ThemeContext } from "../../contexts/themeContext";

const numColumns = 2;

const ProductStore = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [productCtg, setProductCtg] = useState<Product[]>([]);
  const [active, setActive] = useState<boolean | number | undefined>();
  const [initialState, setInitialState] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  //Fetch Products
  const fetchProducts = async () => {
    const productsData = await DataStore.query(Product);
    setProducts(productsData);
    setProductCtg(productsData);
    setInitialState(productsData);
    setProductsFiltered(productsData);
  };

  //Fetch Categories
  const fetchCategories = async () => {
    const categoriesData = await DataStore.query(Category);
    setCategories(categoriesData);
  };

  //Categories
  const changeCtg = (ctg: string) => {
    ctg === "all"
      ? [setProductCtg(initialState), setActive(true)]
      : [
          setActive(true),
          setProductCtg(products.filter((i) => i.Category?.id === ctg)),
        ];
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <Banner />
              </View>
              <View>
                <CategoryFilter
                  categories={categories}
                  changeCtg={changeCtg}
                  productCtg={productCtg}
                  active={active}
                  setActive={setActive}
                />
              </View>
            </View>
          );
        }}
        numColumns={numColumns}
        data={productCtg}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} key={item.id} />}
      />
    </View>
  );
};

export default ProductStore;

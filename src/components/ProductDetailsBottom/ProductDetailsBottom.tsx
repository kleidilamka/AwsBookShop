import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductReviews from "../ProductReviews";
import { Comment, Product } from "../../models";
import { DataStore } from "aws-amplify";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";

interface ProductDetailsBottomProps {
  onAddToCart: () => {};
  onAddToBookmark: () => {};
  item: Product;
}

const ProductDetailsBottom = (props: ProductDetailsBottomProps) => {
  const { item, onAddToCart, onAddToBookmark } = props;
  const { description } = item;
  const [active, setActive] = useState<Number | undefined>(0);

  const [product, setProduct] = useState<Product>();
  const [comments, setComments] = useState<Comment[]>([]);
  const productID = item.id;

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    DataStore.query(Product, productID).then(setProduct);
  }, [productID]);

  useEffect(() => {
    setActive(-1);

    return () => {
      setActive(0);
    };
  }, []);

  useEffect(() => {
    fetchComments();

    return () => {
      setComments([]);
    };
  }, [product]);

  const fetchComments = async () => {
    if (!product) {
      return;
    }

    const videoComments = (await DataStore.query(Comment)).filter(
      (comment: Comment) => comment.productID === product.id
    );

    setComments(videoComments);

    return () => {
      setComments([]);
    };
  };

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundCard }]}>
      <View
        style={[styles.topContainer, { backgroundColor: theme.backgroundCard }]}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme.backgroundCard,
          }}
        >
          <View
            style={{
              backgroundColor: theme.backgroundCard,
            }}
          >
            <Button
              color={active === -1 ? theme.color : "#62666b"}
              title="Description"
              onPress={() => setActive(-1)}
            />
            {active === -1 ? <View style={styles.underline} /> : null}
          </View>
          <View
            style={{
              backgroundColor: theme.backgroundCard,
            }}
          >
            <Button
              title="Reviews"
              color={active === 1 ? theme.color : "#62666b"}
              onPress={() => setActive(1)}
            />
            {active !== -1 ? <View style={styles.underline} /> : null}
          </View>
        </View>
        {/* {Bookmark Button} */}
        <TouchableOpacity
          onPress={() => {
            onAddToBookmark();
          }}
          style={{ margin: 5 }}
        >
          <FontAwesome name="bookmark-o" size={27} color={"#67707d"} />
        </TouchableOpacity>
      </View>

      {active === -1 ? (
        <View
          style={[
            styles.descriptionContainer,
            {
              backgroundColor: theme.backgroundCard,
            },
          ]}
        >
          <ScrollView style={{ marginBottom: 80 }}>
            <Text style={{ color: theme.color, fontSize: 17 }}>
              {description}
            </Text>
          </ScrollView>
          <TouchableOpacity onPress={onAddToCart} style={styles.buyBtn}>
            <Text style={styles.btnText}>{`Add To Cart`}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.reviewsContainer,
            { backgroundColor: theme.backgroundColor },
          ]}
        >
          <ProductReviews
            comments={comments}
            productID={product.id}
            fetchComments={fetchComments}
          />
        </View>
      )}
    </View>
  );
};

export default ProductDetailsBottom;

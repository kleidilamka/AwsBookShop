import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { DataStore, Auth } from "aws-amplify";
import { Comment, User } from "../../models";

import ProductReview from "../ProductReview";
import {
  FlatList,
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/themeContext";
import {
  useSharedValue,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

import styles from "./styles";

interface ProductReviewsProps {
  comments: Comment[];
  productID: string;
  fetchComments: () => {};
}

const ProductReviews = ({
  comments,
  productID,
  fetchComments,
}: ProductReviewsProps) => {
  const [newComment, setNewComment] = useState("");
  const { theme } = useContext(ThemeContext);

  const sendComment = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    const userSub = userInfo.attributes.sub;

    const user = (await DataStore.query(User)).find(
      (u: any) => u.sub === userSub
    );

    if (!user) {
      console.error("User not found");
      return;
    }

    await DataStore.save(
      new Comment({
        comment: newComment,
        likes: 0,
        dislikes: 0,
        replies: 0,
        productID,
        userID: user.id,
      })
    );
    setNewComment("");
    fetchComments();
  };

  return (
    <Animated.View
      style={{
        backgroundColor: theme.backgroundCard,
        flex: 1,
      }}
    >
      <PanGestureHandler>
        <Animated.View style={styles.inputContainer}>
          <TextInput
            placeholder="what do you think?"
            value={newComment}
            onChangeText={setNewComment}
            placeholderTextColor="grey"
            style={[styles.input, { backgroundColor: theme.backgroundCard }]}
          />
          <TouchableOpacity style={{}} onPress={sendComment}>
            <Feather name="send" size={30} color="#3faa97" />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
      <FlatList
        style={{ marginTop: 10 }}
        data={comments}
        renderItem={({ item }) => (
          <ProductReview comment={item} fetchComments={fetchComments} />
        )}
      />
    </Animated.View>
  );
};

export default ProductReviews;

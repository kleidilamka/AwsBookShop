import { DataStore } from "aws-amplify";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/themeContext";
import { Comment, User } from "../../models";
import styles from "./styles";

interface ProductReviewProps {
  comment: Comment;
  fetchComments: () => {};
}

const ProductReview = ({ comment, fetchComments }: ProductReviewProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    DataStore.query(User, comment.userID as string).then(setUser);
  });

  const deleteComment = async () => {
    const commentToDelete = await DataStore.query(Comment, comment.id);

    await DataStore.delete(commentToDelete);

    fetchComments();
  };

  return (
    <View
      style={[
        styles.reviewsContainer,
        { backgroundColor: theme.backgroundCard },
      ]}
    >
      <Image style={styles.image} source={{ uri: user?.image }} />
      <View
        style={[
          styles.comment,
          {
            backgroundColor: theme.backgroundCard,
            shadowColor: theme.shadowColor,
          },
        ]}
      >
        <Text style={{ color: theme.color, marginLeft: 10, marginBottom: 10 }}>
          {`${user?.firstName} ${user?.lastName}`}
        </Text>
        <Text style={{ color: theme.color, marginLeft: 10 }}>
          {comment.comment}
        </Text>
      </View>
      <TouchableOpacity onPress={deleteComment}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductReview;

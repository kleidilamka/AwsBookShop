import { DataStore } from "aws-amplify";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/themeContext";
import { Comment, User } from "../../models";
import { FontAwesome } from "@expo/vector-icons";

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
    if (user) {
      const commentToDelete = await DataStore.query(Comment, comment.id);

      await DataStore.delete(commentToDelete);
    } else {
      return;
    }

    fetchComments();
  };

  return (
    <View
      style={[
        styles.reviewsContainer,
        { backgroundColor: theme.backgroundCard },
      ]}
    >
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
      <TouchableOpacity style={styles.deleteBtn} onPress={deleteComment}>
        <FontAwesome
          name="trash-o"
          color={theme.iconBgColor}
          size={28}
          // style={[
          //   {
          //     backgroundColor: theme.iconBgColor,
          //   },
          // ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductReview;

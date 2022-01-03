import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import { Auth, DataStore } from "aws-amplify";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { User } from "../../models";
import userData from "../../data/userData";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState(false);

  const { theme, dark } = useContext(ThemeContext);

  const handleChangePassword = async () => {
    Auth.currentAuthenticatedUser()
      .then((user: any) => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then((data: any) => console.log(data))
      .catch((err: Error) => new Error(err.message));
  };

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    if (!userInfo) {
      return;
    }
    const userSub = userInfo.attributes.sub;

    const userData = await (
      await DataStore.query(User)
    ).find((u: User) => u.sub === userSub);

    setUser(userData);
  };

  useEffect(() => {
    fetchUser();
    return () => {
      setUser(undefined);
    };
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.linearGradient,
        { backgroundColor: theme.backgroundColor },
      ]}
    >
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Text style={[styles.title, { color: theme.color }]}>
          Email: {user?.email}
        </Text>

        <TextInput
          style={[styles.inputs, { backgroundColor: theme.backgroundCard }]}
          placeholder="Old password"
          placeholderTextColor={dark ? "lightgrey" : "grey"}
          value={oldPassword}
          onChangeText={(value) => setOldPassword(value)}
          secureTextEntry
          keyboardType="default"
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
        />

        <TextInput
          style={[styles.inputs, { backgroundColor: theme.backgroundCard }]}
          placeholder="New password"
          placeholderTextColor={dark ? "lightgrey" : "grey"}
          value={newPassword}
          onChangeText={(value) => setNewPassword(value)}
          secureTextEntry
          keyboardType="default"
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
        />
        <TouchableOpacity
          style={styles.changePasswordButton}
          // loading={signInLoading}
          // disabled={signInLoading}
          onPress={handleChangePassword}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

import Amplify, { Auth, DataStore } from "aws-amplify";
import config from "./src/aws-exports";
import { ThemeProvider } from "./src/contexts/themeContext";
import { AuthProvider } from "./src/contexts/authContext";
import AppNavigator from "./src/navigation/AppNavigator";
import { User } from "./src/models";
Amplify.configure(config);
const App = () => {
  useEffect(() => {
    saveUserToDB();

    return () => {
      saveUserToDB();
    };
  }, []);

  const saveUserToDB = async () => {
    // get user  from cognito
    const userInfo = await Auth.currentAuthenticatedUser();

    if (!userInfo) {
      return;
    }
    const userId = userInfo.attributes.sub;

    // check if user exists in DB
    const user = (await DataStore.query(User)).find(
      (user: User) => user.sub === userId
    );
    if (!user) {
      // if not, save user to db.
      await DataStore.save(
        new User({
          sub: userId,
          username: "",
          email: userInfo.attributes.email,
          image: "",
        })
      );
    } else {
      console.warn("User already exists in DB");
    }
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

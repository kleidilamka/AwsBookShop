import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgetPassword from "../screens/ForgetPassword/ForgetPassword";
import { AuthStackParamsList } from "./navigationTypes";

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthNavigator = ({ isSignout }: any) => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        title: "Sign in",
        animationTypeForReplace: isSignout ? "pop" : "push",
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <Stack.Screen
      name="ForgetPassword"
      component={ForgetPassword}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

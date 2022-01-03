import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAuthState, useAuthDispatch } from "../contexts/authContext";
import { checkAuth } from "../services/authService";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import FakeScreen from "../screens/FakeScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isLoading, isSignout, userToken }: any = useAuthState();
  const dispatch = useAuthDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token = null;
      try {
        const user = await checkAuth();
        const { jwtToken } = user;
        token = jwtToken;
      } catch (e) {
        console.log("error", e);
      }
      dispatch({ type: "RESTORE_TOKEN", token });
    };

    bootstrapAsync();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoading && (
            // We haven't finished checking for the token yet
            <Stack.Screen name="FakeScreen" component={FakeScreen} />
          )}
          {!isLoading && userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              isSignout={isSignout}
              name="Auth"
              component={AuthNavigator}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

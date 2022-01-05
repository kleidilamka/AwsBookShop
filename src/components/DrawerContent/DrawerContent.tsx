import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";

import { DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";
import { useAuthDispatch } from "../../contexts/authContext";
import { signOut } from "../../services/authService";
import { ThemeContext } from "../../contexts/themeContext";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";

type NavigationProps = StackNavigationProp<RootStackParamsList>;

const DrawerContent = () => {
  const { dark, theme, toggle } = useContext(ThemeContext);

  const dispatch = useAuthDispatch();
  const [user, setUser] = useState<User | undefined>(undefined);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      // The screen is focused
      // Call any action
      fetchUser();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    if (!userInfo) {
      return;
    }
    const userSub = userInfo.attributes.sub;

    console.log(userSub);

    const userData = await (
      await DataStore.query(User)
    ).find((u: any) => u.sub === userSub);

    setUser(userData);
  };

  const handleSignOut = async () => {
    await signOut();
    dispatch({ type: "SIGN_OUT" });
    try {
      throw new RangeError();
    } catch (e: Error | any) {
      console.log(e.message);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <View style={{ flex: 1.3, alignItems: "center" }}>
          <Image
            source={{
              uri: user?.image
                ? user?.image
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            }}
            style={{ height: 83, width: 83, borderRadius: 45 }}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              maxWidth: 100,
              color: theme.color,
            }}
          >
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={{ color: theme.color }}>{user?.username}</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={theme.iconBgColor}
                size={size}
              />
            )}
            label="Home"
            labelStyle={{ color: theme.color }}
            onPress={() => {
              navigation.navigate("ProductStore");
            }}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <AntDesign name="user" color={theme.iconBgColor} size={size} />
            )}
            label="Profile"
            labelStyle={{ color: theme.color }}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="settings" color={theme.iconBgColor} size={size} />
            )}
            label="Change Password"
            labelStyle={{ color: theme.color }}
            onPress={() => {
              navigation.navigate("ChangePassword");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-check-outline"
                color={theme.iconBgColor}
                size={size}
              />
            )}
            label="Support"
            labelStyle={{ color: theme.color }}
            onPress={() => {
              navigation.navigate("Support");
            }}
          />
        </View>
        <View
          style={{
            height: 1,
            width: "90%",
            backgroundColor: "#3333",
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          {dark ? (
            <Text style={{ color: theme.color }}>Light Theme</Text>
          ) : (
            <Text style={{ color: theme.color }}>Dark Theme</Text>
          )}
          <Switch
            trackColor={{ false: "#767577", true: "#3faa97" }}
            thumbColor={dark ? "#fff" : "#f4f3f4"}
            onChange={toggle}
            value={dark}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={theme.color}
              size={size}
            />
          )}
          labelStyle={{ color: dark ? theme.color : theme.iconBgColor }}
          label="Sign Out"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#3333",
    borderTopWidth: 1,
  },
});

export default DrawerContent;

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DataStore } from "aws-amplify";
import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../contexts/themeContext";
import { User } from "../../models";
import { RootStackParamsList } from "../../navigation/navigationTypes";
import styles from "./styles";

interface ProfileComponentProps {
  user: User | undefined;
  fetchUser: () => {};
}

type NavigationProps = StackNavigationProp<RootStackParamsList>;

const ProfileComponent = (props: ProfileComponentProps) => {
  const { user, fetchUser } = props;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { dark, theme } = useContext(ThemeContext);

  const navigation = useNavigation<NavigationProps>();

  const updateUser = async () => {
    try {
      setLoading(true);
      const original = await DataStore.query(User, user?.id);
      console.log(original);
      await DataStore.save(
        User.copyOf(original, (updated) => {
          {
            firstName === ""
              ? (updated.firstName = original.firstName)
              : (updated.firstName = firstName);
          }
          {
            lastName === ""
              ? (updated.lastName = original.lastName)
              : (updated.lastName = lastName);
          }

          {
            phoneNumber === ""
              ? (updated.phoneNumber = original.phoneNumber)
              : (updated.phoneNumber = phoneNumber);
          }

          {
            address === ""
              ? (updated.address = original.address)
              : (updated.address = address);
          }

          {
            city === ""
              ? (updated.city = original.city)
              : (updated.city = city);
          }
        })
      );

      setLoading(false);
      navigation.navigate("ProductStore");
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Image source={{ uri: "" }} style={styles.image} />
      <TextInput
        placeholder="First Name"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={firstName}
        onChangeText={setFirstName}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={lastName}
        onChangeText={setLastName}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="Address"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={address}
        onChangeText={setAddress}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TextInput
        placeholder="City"
        placeholderTextColor={dark ? "lightgrey" : "grey"}
        value={city}
        onChangeText={setCity}
        keyboardType="default"
        autoCapitalize="none"
        style={[
          styles.input,
          { backgroundColor: theme.backgroundCard, color: theme.color },
        ]}
      />
      <TouchableOpacity onPress={updateUser} style={styles.submitButton}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileComponent;

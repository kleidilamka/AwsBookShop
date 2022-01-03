import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import countryList from "country-list";
import { Auth, DataStore, API, graphqlOperation } from "aws-amplify";
// import { useStripe } from "@stripe/stripe-react-native";
import { Order, OrderProduct, CartProduct } from "../../models";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/themeContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigation/navigationTypes";

const countries = countryList.getData();

type NavigationProps = StackNavigationProp<RootStackParamsList, "ProductStore">;

const AddressScreen = () => {
  const [country, setCountry] = useState<string | undefined>(countries[0].code);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [city, setCity] = useState("");
  const [clientSecret, setClientSecret] = useState();
  const { dark, theme } = useContext(ThemeContext);

  //   const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const navigation = useNavigation<NavigationProps>();

  const saveOrder = async () => {
    // get user details
    const userData = await Auth.currentAuthenticatedUser();
    // create a new order
    const newOrder = await DataStore.save(
      new Order({
        userSub: userData.attributes.sub,
        fullName: fullname,
        phoneNumber: phone,
        country,
        city,
        address,
      })
    );
    console.log(newOrder);

    // fetch all cart items
    const cartItems = await DataStore.query(CartProduct, (cp) =>
      cp.userSub("eq", userData.attributes.sub)
    );

    // attach all cart items to the order
    await Promise.all(
      cartItems.map((cartItem: CartProduct) =>
        DataStore.save(
          new OrderProduct({
            quantity: cartItem?.quantity,
            option: cartItem.option,
            productID: cartItem.cartProductProductId,
            orderID: newOrder.id,
          })
        )
      )
    );

    // delete all cart items
    await Promise.all(
      cartItems.map((cartItem: CartProduct) => DataStore.delete(cartItem))
    );

    // redirect home
  };

  const onCheckout = () => {
    if (addressError) {
      Alert.alert("Fix all field errors before submiting");
      return;
    }

    if (!fullname) {
      Alert.alert("Please fill in the fullname field");
      return;
    }

    if (!phone) {
      Alert.alert("Please fill in the phone number field");
      return;
    }

    // handle payments
    saveOrder();
    navigation.navigate("ProductStore");
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError("Address is too short");
    }
  };

  return (
    <View style={[styles.root, { backgroundColor: theme.backgroundColor }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <View>
          <View>
            <Picker selectedValue={country} onValueChange={setCountry}>
              {countries.map((country: any) => (
                <Picker.Item
                  color={theme.color}
                  value={country.code}
                  label={country.name}
                />
              ))}
            </Picker>
          </View>

          {/* Full name */}
          <View style={styles.row}>
            <Text style={[styles.label, { color: theme.color }]}>
              Full name (First and Last name)
            </Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: theme.backgroundCard, color: theme.color },
              ]}
              placeholder="Full name"
              placeholderTextColor={dark ? "lightgrey" : "grey"}
              value={fullname}
              onChangeText={setFullname}
            />
          </View>

          {/* Phone number */}
          <View style={styles.row}>
            <Text style={[styles.label, { color: theme.color }]}>
              Phone number
            </Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: theme.backgroundCard, color: theme.color },
              ]}
              placeholder="Phone number"
              value={phone}
              placeholderTextColor={dark ? "lightgrey" : "grey"}
              onChangeText={setPhone}
              keyboardType={"phone-pad"}
            />
          </View>

          {/* Address */}
          <View style={styles.row}>
            <Text style={[styles.label, { color: theme.color }]}>Address</Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: theme.backgroundCard, color: theme.color },
              ]}
              placeholder="Address"
              placeholderTextColor={dark ? "lightgrey" : "grey"}
              value={address}
              onEndEditing={validateAddress}
              onChangeText={(text) => {
                setAddress(text);
                setAddressError("");
              }}
            />
            {!!addressError && (
              <Text style={styles.errorLabel}>{addressError}</Text>
            )}
          </View>

          {/* City */}
          <View style={styles.row}>
            <Text style={[styles.label, { color: theme.color }]}>City</Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: theme.backgroundCard, color: theme.color },
              ]}
              placeholder="City"
              placeholderTextColor={dark ? "lightgrey" : "grey"}
              value={city}
              onChangeText={setCity}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.checkoutButton,
              { backgroundColor: theme.iconBgColor },
            ]}
            onPress={onCheckout}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddressScreen;

//   useEffect(() => {
//     fetchPaymentIntent();
//   }, []);

//   useEffect(() => {
//     if (clientSecret) {
//       initializePaymentSheet();
//     }
//   }, [clientSecret]);

//   const fetchPaymentIntent = async () => {
//     const response = await API.graphql(
//       graphqlOperation(createPaymentIntent, { amount })
//     );
//     setClientSecret(response.data.createPaymentIntent.clientSecret);
//   };

//   const initializePaymentSheet = async () => {
//     if (!clientSecret) {
//       return;
//     }
//     const { error } = await initPaymentSheet({
//       paymentIntentClientSecret: clientSecret,
//     });
//     console.log("success");
//     if (error) {
//       Alert.alert(error);
//     }
//   };

//   const openPaymentSheet = async () => {
//     if (!clientSecret) {
//       return;
//     }
//     const { error } = await presentPaymentSheet({ clientSecret });

//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//     } else {
//       saveOrder();
//       Alert.alert("Success", "Your payment is confirmed!");
//     }
//   };

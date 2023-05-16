import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Register = () => {
  const navigation = useNavigation();

    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("user credential", userCredential);
        //const user = userCredential._tokenResponse.email;
        //const myUserUid = auth.userCredential.uID

        //setDoc(doc(db, "users", `${myUserUid}`), {
        //email: user,
        //phone: phone,
        //  });
      }
    );
  };

  return (
    <KeyboardAvoidingView style={tw`flex-1 bg-blue-500`} behavior="padding">
      <View style={tw` bg-blue-400 rounded-full flex-1 justify-center mt-16`}>
        <Text style={tw` text-center text-white text-3xl mt-44`}>
          Create an account.
        </Text>

        <View
          style={tw`h-full justify-center items-center w-full rounded-lg p-8 `}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            style={tw`w-full h-16 border border items-center rounded-lg px-4 py-3 mb-4 text-xl text-gray-900`}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={tw`w-full h-16 border border  rounded-lg px-4 py-3 mb-4 text-xl text-gray-900`}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            placeholder="Phone No"
            placeholderTextColor="grey"
            style={tw`w-full h-16 border border items-center rounded-lg px-4 py-3 mb-4 text-xl text-gray-900`}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />

          <TouchableOpacity
            className="w-full h-16 bg-red-500 items-center justify-center rounded-full"
            onPress={register}
          >
            <Text style={tw`text-xl font-bold text-white`}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animatable,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import tw from "tailwind-react-native-classnames";
import { auth } from "../firebase";
import { pg } from "../assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        navigation.replace("MainPage");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    });
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-zinc-800 behavior=padding">
      <Text className="text-center text-blue-500 font-bold  text-3xl mt-28">
        Pat-a-Pet !
      </Text>

      <View className="bg-zinc-200 rounded-3xl bg-opacity-25 p-4 shadow-md mb-56 mt-10 ml-3 mr-3">
        <Image
          animation="pulse"
          easing="ease-in-out"
          iterationCount={"infinite"}
          source={pg}
          className="w-20 h-20 object-cover  -mb-8 justify-center items-center ml-32 "
        />
        <Text></Text>

        <View
          style={[
            tw`mt-44`,
            { blurRadius: 10, tintColor: "rgba(255, 255, 255, 0.5)" },
          ]}
        >
          <View
            style={tw`h-full justify-center items-center w-full rounded-lg p-4 -mt-24`}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor="grey"
              className="w-full h-16 border bg-white items-center rounded-full px-3 py-3 mb-8 text-xl text-gray-900"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="grey"
              className="w-full h-16 border bg-white items-center rounded-full px-3 py-3 mb-8 text-xl text-gray-900 -mt-4"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View className="flex-row space-x-3">
              <TouchableOpacity
                className="w-36 h-16  bg-teal-300  items-center justify-center rounded-lg"
                onPress={handleLogin}
              >
                <Text style={tw`text-xl font-bold text-white`}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="w-36 h-16 bg-violet-500 items-center justify-center rounded-lg"
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={tw`text-xl font-bold text-white`}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

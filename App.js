import { StatusBar } from "expo-status-bar";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

import { initializeApp } from "firebase/app";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MainPage from "./screens/MainPage";
import Location from "./screens/Location";

import Reminder from "./screens/Reminder";
import ImageStorage from "./screens/ImageStorage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen class name="Home" component={HomeScreen} />
        <Stack.Screen class name="Login" component={Login} />
        <Stack.Screen class name="Register" component={Register} />
        <Stack.Screen class name="MainPage" component={MainPage}></Stack.Screen>
        <Stack.Screen class name="Location" component={Location} />
        <Stack.Screen class name="ImageStorage" component={ImageStorage} />
        <Stack.Screen class name="Reminder" component={Reminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

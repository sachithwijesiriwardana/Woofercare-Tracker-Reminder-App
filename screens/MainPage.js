import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 align-middle justify-center space-x-8 bg-zinc-800 ">
      <Text className="text-center text-white font-bold text-3xl mb-10 ">
        Welcome to Woofer care
      </Text>

      <View className="mr-3 ml-2  space-y-5 ">
        <TouchableOpacity
          className="p-14  bg-rose-600 rounded-3xl justify-center -ml-5"
          onPress={() => navigation.navigate("Location")}
        >
          <Text className="text-center">Find My Pet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-14 bg-teal-400 rounded-3xl justify-center -ml-5"
          onPress={() => navigation.navigate("ImageStorage")}
        >
          <Text className="text-center">ImageStorage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-14  bg-teal-500 rounded-3xl justify-center -ml-5"
          onPress={() => navigation.navigate("Reminder")}
        >
          <Text className="text-center">Reminder</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-14 bg-rose-600  rounded-3xl -ml-5 "
          onPress={() => console.log("HealthGuard")}
        >
          <Text className="text-center">HealthGuard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainPage;

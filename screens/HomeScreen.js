import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { logic, pets } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-zinc-800 flex-1 relative  ">
      <View className="flex-row px-6 mt-6 items-center space-x-2 ">
        <View className="w-32 h-36 ml-28 items-center justify-center  ">
          <Animatable.Image
            animation="pulse"
            easing="ease-in-out"
            iterationCount={"infinite"}
            source={logic}
            className="w-60 h-full object-cover"
          />
        </View>
      </View>

      <View className="px-6 mt-8 space-x-5 justify-center items-center">
        <Text className="text-white text-[42px] front-semibold  ">
          WOOFER CARE
        </Text>
      </View>

      <View className="w-[400px] h-[400px] bg-violet-500 rounded-full absolute bottom-28 -right-60"></View>
      <View className="w-[400px] h-[400px] bg-teal-300 rounded-full absolute  -bottom-28 -left-72"></View>

      <View className="flex-1 relative items-center justify-center  ">
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="absolute bottom-20 w-24 h-24 rounded-full center border-l-2 border-r-2 border-t-4
         border-white items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing={"ease-in-out"}
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-white "
          >
            <Text className="text-grey-50 text-[40px] font-semibold">GO</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

export default function Title({ text }) {
  return (
    <Text className="text-center text-black-400 text-3xl tracking-wide ">
      {text}
    </Text>
  );
}

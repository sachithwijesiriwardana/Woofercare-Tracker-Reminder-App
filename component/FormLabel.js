import { View, Text } from "react-native";
import React from "react";

export default function FormLabel({ text }) {
  return (
    <Text className=" w-3/4 text-lg font-semibold bold tracking-wide mb-2">
      {text}
    </Text>
  );
}

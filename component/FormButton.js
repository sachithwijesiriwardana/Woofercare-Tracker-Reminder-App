import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

export default function FormButton(props) {
  const { clickFunction, text, primary, ...other } = props;

  const primaryStyling = tw`bg-blue-500 border-none p-6 py-3 m-7 rounded-full`,
    secondaryStyling = tw`border-blue-500 border bg-transparent m-7 px-6 py-2 rounded-full`,
    primaryText = tw`text-center text-white font-bold`,
    secondaryText = tw`text-center text-blue-500 font-bold`;

  const buttonStyle = primary ? primaryStyling : secondaryStyling;
  const textStyle = primary ? primaryText : secondaryText;

  return (
    <TouchableOpacity style={buttonStyle} {...other}>
      <Text className={"text-center font-bold "}>{text}</Text>
    </TouchableOpacity>
  );
}

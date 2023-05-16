import React from "react";
import { TextInput } from "react-native";

export default function FormInput(props) {
  const { ...other } = props;

  return (
    <TextInput
      className="border border-blue-600 px-3 py-2 rounded "
      {...other}
    />
  );
}

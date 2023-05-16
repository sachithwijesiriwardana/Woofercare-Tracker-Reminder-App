import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import Title from "./Title";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const FormInputGroup = ({ children }) => {
  return <View className={"my-3 m-4"}>{children}</View>;
};

export default function Form() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  return (
    <View>
      <FormInputGroup>
        <FormLabel text={"Email"} />
        <FormInput onChangeText={(text) => setEmail(text)} value={email} />
      </FormInputGroup>

      <FormInputGroup>
        <FormLabel text={"Password"} />
        <FormInput
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </FormInputGroup>

      <FormButton
        primary={true}
        text="Login"
        onPress={() => Alert.alert("Enter the email")}
      />

      <FormButton primary={false}
       text="Register" 
       onPress={() => Alert.alert("Simple Button pressed")}
       />
    </View>
  );
}

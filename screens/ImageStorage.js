import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase";

const ImageStorage = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    setIsLoading(true);

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uploadURL = await uploadImageAsync(result.assets[0].uri);
      setImage(uploadURL);
      setIsLoading(false);
    } else {
      setImage(null);
      setIsLoading(false);
    }
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `Records/image-${Date.now()}`);
      const result = await uploadBytes(storageRef, blob);
      blob.close();

      return await getDownloadURL(storageRef);
    } catch (error) {
      alert(`error : ${error}`);
    }
  };

  const deleteImage = async () => {
    setIsLoading(true);
    const deleteRef = ref(storage, image);
    try {
      await deleteObject(deleteRef);
      setImage(null);
      setIsLoading(false);
    } catch (error) {
      alert(`Error : ${error}`);
    }
  };

  useEffect(() => {
    // Ask for permission to access the image library on mount
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-zinc-800">
      <View className="px-6 w-full ">
        {!image ? (
          <>
            <TouchableOpacity
              onPress={pickImage}
              className="min-w-full h-64 border-gray-100 rounded-md bg-gray-50 items-center justify-center"
            >
              {isLoading ? (
                <View className="flex items-center justify-center">
                  <ActivityIndicator color={"red"} animating size={"large"} />
                </View>
              ) : (
                <Text className="text-xl text-gray-700 font-semibold">
                  Upload Health Records +
                </Text>
              )}
            </TouchableOpacity>
          </>
        ) : (
          <>
            {image && (
              <View className="w-full h-64 rounded-md overflow-hidden flex items-center justify-center">
                <Image source={{ uri: image }} className="w-full h-full" />
              </View>
            )}
            <Button title="Delete image" onPress={deleteImage} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
export default ImageStorage;

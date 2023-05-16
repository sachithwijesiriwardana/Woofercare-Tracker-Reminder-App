import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";

import MapView, { Marker } from "react-native-maps";

export default function Location({ navigation }) {
  const handleRegionChange = (region) => {
    console.log(region);
  };

  const handleMarkerPress = (e) => {
    console.log(e.nativeEvent.coordinate);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.913509,
          longitude: 79.852677,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={handleRegionChange}
        onRegionChangeComplete={handleRegionChange}
        onPress={handleMarkerPress}
      >
        <Marker
          coordinate={{ latitude: 6.913509, longitude: 79.852677 }}
          title={"Marker Title"}
          description={"Marker Description"}
          onPress={handleMarkerPress}
        />
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Go Back to Main Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#333333",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Shops from "./src/components/Shops/Shops";
import { HomeRoute } from "./src/routes/HomeRoute";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#222" />
      {/* <Shops /> */}
      <HomeRoute />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 10,
  },
});

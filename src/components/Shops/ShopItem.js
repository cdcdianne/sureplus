import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../globalStyles";

export default function ShopItem({ route }) {
  console.log(route.params.img);
  return (
    <View style={styles.shopItem}>
      <Text style={globalStyles.h2}>{route.params.name}</Text>
      <Image source={route.params.img} style={styles.shopItem__image} />
    </View>
  );
}

const styles = StyleSheet.create({
  shopItem: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#222",
    borderTopColor: "transparent",
    alignItems: "center",
  },
  shopItem__image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginVertical: 10,
  },
  // shopItem__name: {
  //   fontSize: 20,
  //   fontWeight: "600",
  //   color: "#fff",
  // },
});

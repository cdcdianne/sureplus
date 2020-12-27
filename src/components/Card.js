import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Card({ feed }) {
  return (
    <View style={styles.card}>
      {/* <View style={styles.card__header}>
        <View style={styles.card__headerLeft}>
          <Image
            source={require("../img/avatar.png")}
            style={styles.card__avatar}
          />
          <View>
            <Text style={styles.card__name}>{feed.name}</Text>
            <Text style={styles.card__handle}>@{feed.handle}</Text>
          </View>
        </View>
        <View style={styles.card__headerRight}>
          <Image
            source={require("../img/avatar.png")}
            style={styles.card__restaurant}
          />
        </View>
      </View> */}
      <View style={styles.card__body}>
        <View style={styles.card__imageContainer}>
          <Image
            source={{ uri: feed.img }}
            style={styles.card__image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.card__name}>{feed.name}</Text>
        <Text style={styles.card__caption}>{feed.caption}</Text>
        <TouchableOpacity>
          <View style={styles.card__button}>
            <Text style={styles.card__buttonText}>ORDER NOW</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 7,
    marginBottom: 20,
    borderTopColor: "lightgray",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 1,
    paddingHorizontal: 20,
    // backgroundColor: "#222",
  },
  card__name: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
  card__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  // card__avatar: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: "50%",
  //   marginRight: 5,
  // },
  // card__restaurant: {
  //   width: 25,
  //   height: 25,
  //   borderRadius: "50%",
  // },
  card__headerLeft: {
    flexDirection: "row",
  },
  card__body: {},
  card__caption: {
    paddingVertical: 10,
    color: "#fff",
  },
  card__imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 15,
  },
  card__image: {
    flex: 1,
    height: 250,
    width: undefined,
    borderRadius: 5,
  },
  card__button: {
    backgroundColor: "purple",
    paddingVertical: 7,
    borderRadius: 5,
    marginVertical: 10,
  },
  card__buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../Card";

export default function Updates({ feeds }) {
  return (
    <FlatList
      data={feeds}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card feed={item} />}
    />
  );
}

const styles = StyleSheet.create({});

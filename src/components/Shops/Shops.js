import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Updates from "./Updates";
import ShopList from "./ShopList";
import globalStyles from "../../globalStyles";
import { db } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";

export default function Shops({ navigation }) {
  // const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("shops")
      .get()
      .then((result) => {
        setShops(result.docs.map((doc) => collectIdsAndDocs(doc)));
        // setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    db.collection("feeds").onSnapshot((snapshot) => {
      setFeeds(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const selectShop = (shop) => {
    console.log(shop);
    navigation.navigate("ShopItem", shop);
  };

  // if (loading) {
  //   return (
  //     <View style={styles.notification__loading}>
  //       <ActivityIndicator size="large" color="#8AC926" />
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={{ backgroundColor: "#222" }}>
      <View style={styles.shops}>
        <View style={styles.shops__header}>
          <TouchableOpacity>
            <Text style={globalStyles.h2}>Sureplus</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={globalStyles.h3}>All Restaurant</Text>
          </TouchableOpacity>
        </View>

        <ShopList shops={shops} selectShop={selectShop} />
        <View style={styles.shops__upates}>
          <Text style={styles.shops__updatesText}>All Updates</Text>
        </View>
        <Updates feeds={feeds} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  shops: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#222",
    paddingTop: 20,
  },
  shops__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  shops__upates: {
    paddingVertical: 10,
    marginTop: 10,
  },
  shops__updatesText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
});

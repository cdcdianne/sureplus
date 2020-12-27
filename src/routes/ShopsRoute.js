import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Shops from "../components/Shops/Shops";
import ShopItem from "../components/Shops/ShopItem";

const Stack = createStackNavigator();

export const ShopsRoute = ({}) => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222",
          elevation: 0,
        },
      }}
      initialRouteName="Shops"
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Shops"
        component={Shops}
      />
      <Stack.Screen
        options={{
          headerTitle: () => null,
          headerTintColor: "#fff",
        }}
        name="ShopItem"
        component={ShopItem}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

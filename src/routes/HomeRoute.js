import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopsRoute } from "../routes/ShopsRoute";
import NewsfeedRoute from "../routes/NewsfeedRoute";
import NotificationRoute from "../routes/NotificationRoute";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const HomeRoute = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="ShopsRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "ShopsRoute") {
              iconName = "home";
              return (
                <AntDesign
                  name={iconName}
                  size={size}
                  color={color}
                  containerStyle={{}}
                />
              );
            } else if (route.name === "NotificationRoute") {
              iconName = "notifications-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "NewsfeedRoute") {
              iconName = "cards-variant";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarLabel: () => null,
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "gray",
          activeBackgroundColor: "#333",
          style: {
            height: 60,
            backgroundColor: "#111",
            // borderRadius: 5,
            elevation: -1,
            overflow: "hidden",
            borderTopColor: "transparent",
          },
          labelStyle: {
            fontSize: 12,
            paddingBottom: 5,
          },
        }}
      >
        <Tabs.Screen
          options={{
            tabBarLabel: "Shops",
          }}
          name="ShopsRoute"
          component={ShopsRoute}
        />
        <Tabs.Screen
          options={{
            tabBarLabel: "Newsfeed",
          }}
          name="NewsfeedRoute"
          component={NewsfeedRoute}
        />
        <Tabs.Screen
          options={{
            tabBarLabel: "Notification",
          }}
          name="NotificationRoute"
          component={NotificationRoute}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

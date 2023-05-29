import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NewsFeed from "./NewsFeed";
import SearchScreen from "./SearchScreen";
import CreatePost from "./CreatePost";
import Reals from "./Reals";
import Profile from "./Profile";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const Tabs = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "NewsFeed") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "CreatePost") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Reals") {
              iconName = focused ? "videocam" : "videocam-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: "gray",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        })}

      >
        <Tabs.Screen name="NewsFeed" component={NewsFeed} />
        <Tabs.Screen name="Search" component={SearchScreen} />
        <Tabs.Screen name="CreatePost" component={CreatePost} />
        <Tabs.Screen name="Reals" component={Reals} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: colors.primary,
    borderRadius: 15,
    height: 70,
  },
});
export default BottomTabs;

import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from "../screens/home/home";
import Colors from "../constants/colors";
import Cart from "../screens/cart";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.primary,
        style: {
          height: 45,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="local-mall"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="local-mall" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={styles.searchIcon}>
              <MaterialIcons name="search" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="saved"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    width: 60,
    height: 60,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    top: -10,
    elevation: 3,
  },
});
export default BottomNavigator;

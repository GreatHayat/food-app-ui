import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/onboarding.js";
import BottomNavigator from "./bottomNavigation.js";
import FoodDetails from "../screens/details/index.js";
import Colors from "../constants/colors.js";
import Cart from "../screens/cart/index.js";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="details"
        component={FoodDetails}
        options={({ route }) => ({
          title: (
            <Text style={{ color: Colors.primary }}>
              {route.params.food.name}
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

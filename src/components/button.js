import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, backgroundColor: Colors.primary }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonText, color: Colors.white }}>{title}</Text>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, backgroundColor: Colors.white }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonText, color: Colors.primary }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export { PrimaryButton, SecondaryButton };

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/colors";

const Card = ({ food }) => {
  return (
    <View style={styles.container}>
      <Image source={food.image} style={{ width: 80, height: 80 }} />
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{food.name}</Text>
        <Text style={{ fontSize: 13, color: Colors.grey }}>
          {food.ingredients}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>${food.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
        <View style={styles.iconContainer}>
          <AntDesign
            name="minus"
            size={20}
            color={Colors.white}
            onPress={() => alert("Item Removed")}
          />
          <AntDesign
            name="plus"
            size={20}
            color={Colors.white}
            onPress={() => alert("Item Added")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 100,
    backgroundColor: Colors.white,
    elevation: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  foodItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  textContainer: {
    flex: 1,
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingHorizontal: 5,
    width: 80,
    height: 30,
    backgroundColor: Colors.primary,
  },
});
export default Card;

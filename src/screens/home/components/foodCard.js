import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/colors";
const { width } = Dimensions.get("screen");

const FoodCard = ({ food, navigation }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.9}
      underlayColor={Colors.white}
      onPress={() => navigation.navigate("details", { food })}
    >
      <View style={styles.foodCard}>
        <View style={{ alignItems: "center", top: -40 }}>
          <Image source={food.image} style={{ width: 100, height: 100 }} />
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: Colors.grey, marginTop: 2 }}>
            {food.ingredients}
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            ${food.price}
          </Text>
          <View style={styles.addToCartButton}>
            <AntDesign name="plus" color={Colors.white} size={20} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  foodCard: {
    width: width / 2 - 20,
    height: 220,
    backgroundColor: Colors.white,
    elevation: 13,
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 15,
  },

  addToCartButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FoodCard;

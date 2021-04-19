import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import foods from "../../constants/foods";
import Card from "./components/card";
import ListFooter from "./components/listFooter";

const Cart = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{ flexDirection: "row" }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={Colors.primary}
          />
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}
          >
            Cart
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListFooterComponentStyle={{ marginTop: 20, paddingHorizontal: 20 }}
        ListFooterComponent={() => <ListFooter />}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    elevation: 10,
  },
});
export default Cart;

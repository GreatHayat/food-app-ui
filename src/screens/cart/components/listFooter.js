import React from "react";
import { View, Text } from "react-native";
import { PrimaryButton } from "../../../components/button";

const ListFooter = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total Price</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>$145.89</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <PrimaryButton title="Checkout" />
      </View>
    </View>
  );
};

export default ListFooter;

import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { PrimaryButton } from "../../components/button";
import Colors from "../../constants/colors";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ height: 400 }}>
        <Image
          source={require("../../../assets/onboardImage.png")}
          style={{ width: "100%", resizeMode: "contain", top: -100 }}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              color: Colors.grey,
            }}
          >
            We help you to find best and delicious food
          </Text>
        </View>

        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
    marginTop: 20,
  },

  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  currentIndicator: {
    width: 30,
    height: 12,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: Colors.grey,
    marginHorizontal: 5,
  },
});
export default Onboarding;

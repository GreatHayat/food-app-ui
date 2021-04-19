import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { SecondaryButton } from "../../components/button";

const FoodDetails = ({ navigation, route }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white }}>
      {/* <View style={styles.header}>
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
            {route.params.food.name}
          </Text>
        </TouchableOpacity>
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={route.params.food.image} style={styles.image} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: Colors.white }}
            >
              {route.params.food.name}
            </Text>
            <View style={styles.iconContainer}>
              <AntDesign
                name={selected ? "heart" : "hearto"}
                size={25}
                color={Colors.primary}
                onPress={() => setSelected(!selected)}
              />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{ marginTop: 30, marginBottom: 40 }}>
            <SecondaryButton
              title="Add to Cart"
              onPress={() => navigation.navigate("cart")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 280,
  },
  image: {
    width: 220,
    height: 220,
  },

  detailsContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  detailsText: {
    marginTop: 15,
    color: Colors.white,
    lineHeight: 22,
    fontSize: 16,
    textAlign: "justify",
  },
});
export default FoodDetails;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import FoodCard from "./components/foodCard";
import Categories from "./components/categories";
import foods from "../../constants/foods";

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const filterFoods = () => {
    const filterFoods = foods.filter(
      (food) => food.category === selectedCategory
    );
    return filterFoods.length > 0 ? filterFoods : foods;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      {/* Header Start */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 10 }}>
              Ariz
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 20, color: Colors.grey }}>
            What do you want today?
          </Text>
        </View>
        <Image
          source={require("../../../assets/person.png")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </View>

      {/* Search Input Start */}
      <View
        style={{ flexDirection: "row", marginTop: 40, paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" color={Colors.grey} size={28} />
          <TextInput
            placeholder="search your favorite food"
            style={{ fontSize: 16, flex: 1 }}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          activeOpacity={0.8}
          onPress={() => alert("Filter Dialog comming soon")}
        >
          <MaterialIcons name="tune" color={Colors.white} size={28} />
        </TouchableOpacity>
      </View>

      {/* categories list start */}
      <View>
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>

      {/* Food Card Start */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filterFoods()}
        renderItem={({ item }) => (
          <FoodCard food={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.light,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  filterButton: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
});
export default Home;

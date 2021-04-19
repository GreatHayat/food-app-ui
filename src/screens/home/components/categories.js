import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import categories from "../../../constants/categories";
import Colors from "../../../constants/colors";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const [categoryIndex, selectedCategoryIndex] = React.useState("");

  const _selectedCategory = (category) => {
    if (selectedCategory === category.name.toLowerCase()) {
      setSelectedCategory("");
      selectedCategoryIndex("");
      return;
    }
    selectedCategoryIndex(category.id);
    setSelectedCategory(category.name.toLowerCase());
  };

  return (
    <ScrollView
      contentContainerStyle={styles.categoriesContainer}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => _selectedCategory(category)}
        >
          <View
            style={{
              backgroundColor:
                categoryIndex === category.id
                  ? Colors.primary
                  : Colors.secondary,
              ...styles.categoryBtn,
            }}
          >
            <View style={styles.categoryBtnImageContainer}>
              <Image
                source={category.image}
                style={{ width: 35, height: 35, resizeMode: "cover" }}
              />
            </View>
            <Text
              style={{
                color:
                  categoryIndex === category.id ? Colors.white : Colors.primary,
                ...styles.categoryText,
              }}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  categoryBtn: {
    width: 120,
    height: 45,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
  },

  categoryBtnImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default Categories;

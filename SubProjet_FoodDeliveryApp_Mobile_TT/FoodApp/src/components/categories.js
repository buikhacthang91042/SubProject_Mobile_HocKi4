import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useFoodContext } from "../../context/FoodContext";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  const { setSelectedCategory, selectedCategory } = useFoodContext();
  console.log("Selected Category:", selectedCategory);

  const categories = [
    { name: "Cơm", icon: "restaurant-outline" },
    { name: "Bánh truyền thống", icon: "pie-chart-outline" },
    { name: "Bánh Âu Á", icon: "pizza-outline" },
    { name: "Đồ ăn vặt", icon: "fast-food-outline" },
    { name: "Đồ ăn nhanh", icon: "fast-food-outline" },
    { name: "Đồ uống", icon: "beer-outline" },
    { name: "Bún/Phở/Mỳ", icon: "fast-food-outline" },
    { name: "Tráng miệng", icon: "ice-cream-outline" },
    { name: "Cháo/Súp", icon: "restaurant-outline" },
    { name: "Lẩu & Nướng", icon: "flame-outline" },
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    navigation.navigate("FoodListScreen");
  };

  const renderCategory = (item) => (
    <TouchableOpacity
      style={styles.box}
      key={item.name}
      onPress={() => handleCategoryPress(item.name)}
    >
      <Icon name={item.icon} size={24} style={styles.icon} />
      <Text style={styles.boxText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh mục</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {/* Hàng thứ nhất */}
          <View style={styles.row}>
            {categories.filter((_, index) => index % 2 === 0).map(renderCategory)}
          </View>
          {/* Hàng thứ hai */}
          <View style={styles.row}>
            {categories.filter((_, index) => index % 2 !== 0).map(renderCategory)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FF3D00",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#FF3D00",
    alignSelf: "center",
  },
  categoriesContainer: {
    flexDirection: "column", // Chia làm 2 hàng
  },
  row: {
    flexDirection: "row", // Xếp các mục trong một hàng
    marginBottom: 10,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#FF3D00",
  },
  icon: {
    color: "#FF6F00",
    marginRight: 8,
  },
  boxText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});

import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Danh mục</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.box}>
          <Icon name="fast-food-outline" size={24} style={styles.icon} />
          
          <Text style={styles.boxText}>Món cơm</Text>
        </View>
        <View style={styles.box}>
          <Icon name="beer-outline" size={24} style={styles.icon} />
          <Text style={styles.boxText}>Trà sữa</Text>
        </View>
        <View style={styles.box}>
          <Icon name="fast-food-outline" size={24} style={styles.icon} />
          <Text style={styles.boxText}>Ăn chay</Text>
        </View>
        <View style={styles.box}>
          <Icon name="fast-food-outline" size={24} style={styles.icon} />
          <Text style={styles.boxText}>Bún, Mì, Phở</Text>
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
    marginLeft: 10, 
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70, 
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

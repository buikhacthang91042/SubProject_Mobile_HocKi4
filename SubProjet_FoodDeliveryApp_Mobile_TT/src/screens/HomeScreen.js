import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Feather";  // Thay đổi này
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />

      {/* Thanh tìm kiếm */}
      <View style={tw`flex-row items-center px-4 pb-2`}>
        <View style={tw`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}>
          <Icon name="search" size={25} color="gray" />  {/* Thay đổi này */}
          <TextInput placeholder="Restaurants" style={tw`ml-2 flex-1`} />
          <View style={[tw`flex-row items-center`, { borderLeftWidth: 2, borderLeftColor: "#D1D5DB", paddingLeft: 8 }]}>
            <Icon name="map-pin" size={20} color="gray" />  {/* Thay đổi này */}
            <Text style={[tw`text-gray-600`, { marginLeft: 10 }]}>Gò Vấp, HCM</Text>
          </View>
        </View>
        <View style={[tw`p-3 rounded-full`, { marginLeft: 10, backgroundColor: themeColors.bgColor(1) }]}>
          <Icon name="sliders" size={20} color="white" />  {/* Thay đổi này */}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
        <Categories />
        <View style={tw`mt-5`}>
          {featured.map((item, index) => (
            <FeaturedRow key={index} title={item.title} description={item.description} restaurants={item.restaurants} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  footer: {
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 0,
    borderTopWidth: 1,
    borderTopColor: "#D1D5DB",
  },
  viewFooter: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerV: {
    justifyContent: "center",
    alignItems: "center",
  },
});

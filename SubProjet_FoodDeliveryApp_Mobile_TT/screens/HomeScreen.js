import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { ScrollView } from "react-native";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <StatusBar barStyle="dark-content" />

      {/* Thanh tìm kiếm */}
      <View style={tw`flex-row items-center px-4 pb-2`}>
        <View
          style={tw`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}
        >
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" style={tw`ml-2 flex-1`} />
          <View
            style={[
              tw`flex-row items-center`,
              {
                borderLeftWidth: 2,
                borderLeftColor: "#D1D5DB",
                paddingLeft: 8,
              },
            ]}
          >
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text style={[tw`text-gray-600`, { marginLeft: 10 }]}>
              Gò Vấp, HCM
            </Text>
          </View>
        </View>
        <View
          style={[
            tw`p-3 rounded-full`,
            { marginLeft: 10, backgroundColor: themeColors.bgColor(1) },
          ]}
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
          <Categories />
        
        <View style={tw`mt-5`}>
          {
            featured.map((item,index)=> {
              return(
                <FeaturedRow 
                key={index}
                title= {item.title}
                description = {item.description}
                restaurants= {item.restaurants}
                    
                
                />
              )
            })
          }
        </View>
      </ScrollView>
      <View style={style.footer}>
        <View style={style.viewFooter}>
          <TouchableOpacity style={style.footerV}>
            <Icon.Home height="28" width="30" stroke="black" />
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={style.viewFooter}>
          <TouchableOpacity style={style.footerV}>
            <Icon.FileText height="28" width="30" stroke="black" />
            <Text>My order</Text>
          </TouchableOpacity>
        </View>
        <View style={style.viewFooter}>
          <TouchableOpacity style={style.footerV}>
            <Icon.Heart  height="28" width="30" stroke="black" />
            <Text>Favorite</Text>
          </TouchableOpacity>
        </View>
        <View style={style.viewFooter}>
          <TouchableOpacity style={style.footerV}>
            <Icon.MessageCircle  height="28" width="30" stroke="black" />
            <Text>Inbox</Text>
          </TouchableOpacity>
        </View>
        <View style={style.viewFooter}>
          <TouchableOpacity style={style.footerV}>
            <Icon.User  height="28" width="30" stroke="black" />
            <Text>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  footer: {
    height:70,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 0,
    borderTopWidth: 1,
    borderTopColor: "#D1D5DB"
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

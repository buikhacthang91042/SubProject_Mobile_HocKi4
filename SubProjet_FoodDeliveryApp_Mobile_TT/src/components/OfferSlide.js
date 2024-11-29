import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");


export default function OfferSlide() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        <View style={styles.slide}>
          <Image
            source={require("../../assets/banner/offer1.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/banner/offer2.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/banner/offer3.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/banner/offer4.jpg")}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 10,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: width - 40,
    height: 180,
    borderRadius: 10, 
  },
  dot: {
    backgroundColor: "#d3d3d3", 
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#FF6F61", 
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});

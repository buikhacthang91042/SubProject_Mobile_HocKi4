import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import StaticImageService from "../services/StaticImageService";
import CountryCode from "../constants/CountryCode";
export default function RegisterPhoneScreen() {
  const navigation = useNavigation();
  const [chonQuocGia, setChonQuocGia] = useState(
    CountryCode.find((country) => country.name === "Vietnam")
  );
  const [inputContainerY, setinputContainerY] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Xác thực số điện thoại</Text>
      <Text style={styles.subHeaderText}>Vui lòng nhập số điện thoại</Text>
      <View
        style={styles.inputContainer}
        onLayout={({
          nativeEvent: {
            layout: { y },
          },
        }) => setinputContainerY(y)}
      >
        <TouchableOpacity style={styles.countryList}>
          <Image
            source={{ uri: StaticImageService.getFlagIcon(chonQuocGia.code) }}
            style={styles.coQuocGia}
          />
          <Text>{chonQuocGia.dial_code}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.inputPhone}>
          <TextInput placeholder="Nhập số diện thoại" />
        </View>
      </View>
      <View style={styles.dsQuocGia}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 50,
  },
  countryList: {
    backgroundColor: "#f9f9f9",
    width: 66,
    marginRight: 10,
    borderRadius: 8,
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "black",
    flexDirection: "row",
  },
  inputPhone: {
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    justifyContent: "center",
    flex: 1,
    height: 40,
  },
  coQuocGia: {
    height: 20,
    width: 20,
  },
  dsQuocGia: {
    backgroundColor: "grey",
    position: "absolute",
    width: 80,
    height: 50,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    zIndex: 3,
  },
});

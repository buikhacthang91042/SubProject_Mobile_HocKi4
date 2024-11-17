import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CountryPicker from "react-native-country-picker-modal";
export default function RegisterPhoneScreen() {
  const navigation = useNavigation();
  const [chonQuocGia, setChonQuocGia] = useState("VN");
  const [dialcode, setDialCode] = useState("+84");
  const [phoneNumber, setPhoneNumber] = useState("");
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
      <View style={styles.inputContainer}>
        <View style={styles.dsQuocGia}>
          <CountryPicker
            countryCode={chonQuocGia}
            withFilter
            withFlag
            withCallingCode
            withAlphaFilter
            onSelect={(country) => {
              setChonQuocGia(country.cca2);
              setDialCode(`+${country.callingCode}`);
            }}
          />
          <Text>{dialcode}</Text>
        </View>
        <View style={styles.inputPhone}>
          <TextInput
            placeholder="Nhập số diện thoại"
            onChangeText={(text) => setPhoneNumber(dialcode + text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("Verification", { phoneNumber })}
      >
        <Text style={styles.createAccountText}>Tạo tài khoản</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 40,
    backgroundColor: "#f9f9f9",
    marginRight: 10,
  },
  createAccountButton: {
    backgroundColor: "#009966",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  createAccountText: {
    color: "#fff",
    fontSize: 18,
  },
});

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
export default function SignUpScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigation = useNavigation();  
    return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
        <Text style={styles.headerText}>Tạo tài khoản</Text>
        <Text style={styles.subHeaderText}>Vui lòng nhập thông tin cá nhân</Text>
  
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Icon name="person-outline" size={20} color="#888" />
            <TextInput
              style={styles.input}
              placeholder="Tên tài khoản"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputField}>
            <Icon name="mail-outline" size={20} color="#888" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputField}>
            <Icon name="lock-closed-outline" size={20} color="#888" />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Icon name={showPass ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
            </TouchableOpacity>
          </View>
        </View>
  
        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate("RegisterPhone")}>
          <Text style={styles.createAccountText}>Tạo tài khoản</Text>
        </TouchableOpacity>
  
        <Text style={styles.orText}>OR</Text>
  
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Icon name="logo-facebook" size={20} color="#fff" />
            <Text style={styles.socialButtonText}>Liên kết với Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Icon name="logo-google" size={20} color="#fff" />
            <Text style={styles.socialButtonText}>Liên kết với Google</Text>
          </TouchableOpacity>
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
      marginBottom: 20,
    },
    inputField: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      paddingHorizontal: 10,
      marginVertical: 5,
      backgroundColor: "#f9f9f9",
    },
    input: {
      flex: 1,
      padding: 10,
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
    orText: {
      textAlign: "center",
      color: "#888",
      marginVertical: 10,
    },
    socialButtonsContainer: {
      alignItems: "center",
    },
    socialButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      borderRadius: 5,
      width: "100%",
      marginVertical: 5,
    },
    facebookButton: {
      backgroundColor: "#4267B2",
    },
    googleButton: {
      backgroundColor: "#EA4335",
    },
    socialButtonText: {
      color: "#fff",
      marginLeft: 10,
      fontSize: 16,
    },
  });
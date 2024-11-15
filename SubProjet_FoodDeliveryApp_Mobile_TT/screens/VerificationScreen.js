import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function OTPVerificationScreen({
  route: {
    params: { phoneNumber },
  },
}) {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index === 0) {
      secondInput.current.focus();
    } else if (index === 1) {
      thirdInput.current.focus();
    } else if (index === 2) {
      fourthInput.current.focus();
    }
  };
  const handleVerify = () => {
    const otpCode = otp.join("");
    console.log("OTP Entered:", otpCode);
  };

  const handleResendCode = () => {
    console.log("Resend OTP code");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Xác thực</Text>
      <Text style={styles.subtitle}>
        Nhập mã xác thực đã được gửi về số điện thoại {phoneNumber}
      </Text>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp[0]}
          onChangeText={(value) => handleOtpChange(0, value)}
          ref={firstInput}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp[1]}
          onChangeText={(value) => handleOtpChange(1, value)}
          ref={secondInput}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp[2]}
          onChangeText={(value) => handleOtpChange(2, value)}
          ref={thirdInput}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={otp[3]}
          onChangeText={(value) => handleOtpChange(3, value)}
          ref={fourthInput}
        />
      </View>

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Không nhận được mã ? Gửi lại</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Xác thực</Text>
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
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 18,
  },
  resendText: {
    color: "green",
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: "teal",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

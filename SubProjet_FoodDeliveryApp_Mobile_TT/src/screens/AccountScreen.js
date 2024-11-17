import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Chọn loại icon khác
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const navigation = useNavigation();
  const [nhanThongBao, setNhanThongBao] = useState(false);
  const [nhanThongBaoKM, setNhanThongBaoKM] = useState(false);
  const [cheDoToi, setCheDoToi] = useState(false);

  function handleLogOut() {
    Alert.alert(
      "Xác nhận",
      "Bạn có muốn đăng xuất ?",
      [
        { text: "Không", style: "cancel" },
        {
          text: "Có",
          onPress: () =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            }),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={style.container}>
        <StatusBar translucent />
        <View style={style.header}>
          <View style={style.title}>
            <Text style={style.headerText}>Tài Khoản</Text>
            <View style={{ marginRight: 8, marginTop: 10 }}>
              <TouchableOpacity>
                <Icon name="bell-outline" size={20} color="white" />
                <View style={style.thongBao}>
                  <Text style={style.textThongBao}>99</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.profile}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/User_Images/HinhDaiDienNguoiDung.jpg")}
                style={{ width: 60, height: 60, borderRadius: 40 }}
              ></Image>
            </TouchableOpacity>
            <View style={style.thongTinNguoiDung}>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
                Bùi Khắc Thắng
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "thin", color: "white" }}>
                Khách hàng thân thiết
              </Text>
            </View>
          </View>
          <View style={style.bangLuaChon}>
            <View style={style.luaChon}>
              <TouchableOpacity>
                <Icon name="package" size={30} color="#009999" style={{ marginLeft: 16 }} />
                <Text style={style.textLuaChon}>Đơn hàng</Text>
              </TouchableOpacity>
            </View>
            <View style={style.luaChon}>
              <TouchableOpacity>
                <Icon name="gift" size={30} color="#FF3333" style={{ marginLeft: 34 }} />
                <Text style={style.textLuaChon}>Mã khuyến mãi</Text>
              </TouchableOpacity>
            </View>
            <View style={style.luaChon}>
              <TouchableOpacity>
                <Icon name="home-circle" size={30} color="#FFCC00" style={{ marginLeft: 10 }} />
                <Text style={style.textLuaChon}>Địa chỉ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.body}>
          <View style={style.bangChucNang}>
            <View style={style.chucNang}>
              <Text style={style.tieuDeChucNang}>Tài khoản của tôi</Text>
              <View style={style.nutchucNang}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Icon name="account" size={20} color="#009999" />
                  <Text style={style.tenChucNang}>Quản lí tài khoản</Text>
                  <Icon name="chevron-right" size={20} style={{ marginLeft: 18 }} />
                </TouchableOpacity>
              </View>
              <View style={style.nutchucNang}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Icon name="credit-card" size={20} color="#009999" />
                  <Text style={style.tenChucNang}>Phương thức thanh toán</Text>
                  <Icon name="chevron-right" size={20} style={{ marginLeft: 18 }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.chucNang}>
              <Text style={style.tieuDeChucNang}>Thông báo</Text>
              <View style={style.Switch}>
                <Icon name="bell-ring" size={20} color="#009999" />
                <Text style={style.tenChucNang}>Thông báo </Text>
                <Switch
                  value={nhanThongBao}
                  onValueChange={() => setNhanThongBao(!nhanThongBao)}
                />
              </View>
              <View style={style.Switch}>
                <Icon name="gift" size={20} color="#009999" />
                <Text style={style.tenChucNang}>Thông báo khuyến mãi</Text>
                <Switch
                  value={nhanThongBaoKM}
                  onValueChange={() => setNhanThongBaoKM(!nhanThongBaoKM)}
                />
              </View>
            </View>
            <View style={style.chucNang}>
              <Text style={style.tieuDeChucNang}>Hơn nữa</Text>
              <View style={style.Switch}>
                <Icon name="weather-night" size={20} color="#009999" />
                <Text style={style.tenChucNang}>Chế độ tối </Text>
                <Switch
                  value={cheDoToi}
                  onValueChange={() => setCheDoToi(!cheDoToi)}
                />
              </View>
              <View style={style.nutchucNang}>
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={handleLogOut}
                >
                  <Icon name="logout" size={20} color="#009999" />
                  <Text style={style.tenChucNang}>Đăng xuất</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    backgroundColor: "#009999",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  profile: {
    position: "absolute",
    marginTop: 60,
    flexDirection: "row",
    padding: 20,
  },
  thongTinNguoiDung: {
    padding: 7,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "thin",
    flex: 1,
    textAlign: "center",
  },
  bangLuaChon: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    marginLeft: 20,
    marginTop: 100,
    height: 100,
    borderRadius: 16,
  },
  luaChon: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    paddingVertical: 10,
  },
  textLuaChon: {
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "center",
    marginTop: 4,
  },
  body: {
    flex: 1,
    marginTop: 150,
  },
  thongBao: {
    backgroundColor: "yellow",
    position: "absolute",
    height: 16,
    width: 16,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    right: -2,
    top: -8,
  },
  textThongBao: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: "red",
  },
  chucNang: {
    height: 140,
    padding: 12,
    marginTop: 10,
  },
  nutchucNang: {
    flexDirection: "row",
    width: "100%",
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bangChucNang: {
    height: 450,
    flexDirection: "column",
    backgroundColor: "white",
    width: "90%",
    marginLeft: 20,
    borderRadius: 16,
    marginTop: -90,
  },
  tenChucNang: {
    marginLeft: 10,
    width: "80%",
    fontSize: 16,
  },
  tieuDeChucNang: {
    fontWeight: "bold",
    fontSize: 20,
  },
  Switch: {
    flex: 1,
    padding: 6,
    flexDirection: "row",
    marginTop: 10,
  },
});

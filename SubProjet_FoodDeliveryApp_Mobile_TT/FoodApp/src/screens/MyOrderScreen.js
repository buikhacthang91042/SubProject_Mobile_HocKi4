import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import {firebase} from '../../Config/FirebaseConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
export default function MyOrderScreen() {
  const navigation = useNavigation();
  const [cartData, setCartData] = useState(null);
  const [totalCost, setTotalCost] = useState('0');

  const getCardData = async () => {
    // console.log('UID nè', firebase.auth().currentUser.uid);

    const docRef = firebase
      .firestore()
      .collection('UserCart')
      .doc(firebase.auth().currentUser.uid);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          // console.log('Tồn tại document UserCart');
          const data = JSON.stringify(doc.data());
          // console.log(data);
          setCartData(data);
        } else {
          // console.log('Không tồn tài document này');
        }
      })
      .catch(error => {
        // console.log('Lỗi lấy dữ liệu', error);
      });
  };

  // Tải lại dữ liệu khi màn hình được focus (hiển thị lại)
  useFocusEffect(
    React.useCallback(() => {
      getCardData(); // Gọi hàm tải dữ liệu mỗi khi màn hình được focus
    }, []),
  );

  useEffect(() => {
    if (cartData != null) {
      const food = JSON.parse(cartData).cart;
      // console.log(food);

      let totalfoodprice = 0;
      food.map(item => {
        totalfoodprice +=
          parseInt(item.item.foodPrice) * parseInt(item.Foodquantity);
      });
      // console.log(totalfoodprice);
      setTotalCost(JSON.stringify(totalfoodprice));
    }
  }, [cartData]);

  const deleteItem = item => {
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc chắn muốn xóa món này khỏi giỏ hàng?',
      [
        {
          text: 'Hủy',
          // onPress: () => console.log('Hủy xóa'),
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: () => {
            const docRef = firebase
              .firestore()
              .collection('UserCart')
              .doc(firebase.auth().currentUser.uid);
            docRef.update({
              cart: firebase.firestore.FieldValue.arrayRemove(item),
            });
            getCardData(); // Cập nhật lại dữ liệu sau khi xóa
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={[{height: 'auto'},tw`flex-1 bg-white`]}>
      {/* Nội dung màn hình */}
      <View style={[tw`py-10 shadow-sm`]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={tw`absolute top-10 left-4 bg-gray-50 p-2 rounded-full shadow z-10`}>
          <Icon name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text style={tw`font-bold text-xl text-center mt-5`}>Your Cart</Text>

        {cartData == null || JSON.parse(cartData).cart.length == 0 ? (
          <Text style={tw`font-bold text-xl text-center`}>
            {'Giỏ hàng của bạn trống'}
          </Text>
        ) : (
          <FlatList style={[{height: 500}]}
            data={JSON.parse(cartData).cart}
            renderItem={({item}) => (
              <View
                style={[
                  tw`flex-row items-center py-4 px-5 bg-white rounded-3xl mx-2 mb-3 shadow-md`,
                ]}>
                <Image
                  source={{
                    uri: item.item.foodImageUrl.replace(
                      'localhost',
                      '192.168.1.9',
                    ),
                  }}
                  style={[tw`w-24 h-24 rounded-3xl`]}
                />
                <View style={[tw`h-28 items-center justify-between`]}>
                  <View style={tw`font-bold text-2xl px-6`}>
                    <Text
                      style={[
                        {fontSize: 15},
                        tw`font-bold text-gray-700 mt-5`,
                      ]}>
                      {item.Foodquantity}&nbsp;{item.item.foodName}
                    </Text>
                    <Text
                      style={[
                        {color: 'green'},
                        tw`font-semibold mt-10 text-sm`,
                      ]}>
                      {item.item.foodPrice}đ/ 1 phần
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      {backgroundColor: '#F88A37'},
                      tw`relative p-3 rounded-full shadow-md bottom-20 mt-11 left-40`,
                    ]}
                    onPress={() => deleteItem(item)}>
                    <Icon name="remove" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <View
        style={[
          {backgroundColor: '#FDE5D2'},
          tw`absolute bottom-0 w-full p-5 px-10 rounded-t-3xl`,
        ]}>
        <View style={tw`flex-row justify-between`}>
          <Text style={[{fontSize: 20}, tw`text-gray-700 font-extrabold`]}>
            {'Tổng cộng'}
          </Text>
          <Text style={[{fontSize: 20, color: 'green'}, tw`font-extrabold`]}>
            {totalCost}{'000 đ'}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            {backgroundColor: '#F88A37'},
            tw`p-3 rounded-full mt-5 self-center px-28`,
          ]}
          onPress={() => Alert.alert('Đặt đơn thành công')}>
          <Text style={[tw`text-white text-center font-bold text-lg`]}>
            {'Đặt đơn'}
          </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
}

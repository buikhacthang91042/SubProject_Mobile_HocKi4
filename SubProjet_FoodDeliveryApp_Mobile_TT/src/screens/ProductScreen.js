import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import Cardslider from '../components/Cardslider';
import {firebase} from '../../Config/FirebaseConfig';
import auth from '../../Config/FirebaseConfig';

const ProductScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const [foodData, setFoodData] = useState([]);

  const foodRef = firebase.firestore().collection('FoodData');
  //  console.log(search);

  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
      setFoodData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  //  console.log(foodData);
  // console.log(vegData);
  let item = params;
  // console.log(item);
  if (params === undefined) {
    navigation.navigate('Home');
  }

  const [quantity, setQuantity] = useState('1');
  const [addonquantity, setAddonQuantity] = useState('0');

  const addToCart = () => {
    // console.log('Thêm vào giỏ hàng thành công');
    const docRef = firebase.firestore().collection('UserCart').doc();
    // console.log(auth);
    const cartData = {
      item,
      Addonquantity: addonquantity,
      Foodquantity: quantity,
    };
    // console.log('cartData ',cartData);
    docRef.get().then(doc => {
      if (doc.exists) {
        docRef.update({
          cart: firebase.firestore.FieldValue.arrayUnion(cartData),
        });
      } else {
        docRef.set({
          cart: cartData,
        });
        alert('Đã thêm vào giỏ hàng');
      }
    });
  };

  const increaseQuantity = () => {
    setQuantity((parseInt(quantity) + 1).toString());
  };
  const decreaseQuantity = () => {
    if (parseInt(quantity) > 1) {
      setQuantity((parseInt(quantity) - 1).toString());
    }
  };
  const increaseAddonQuantity = () => {
    setAddonQuantity((parseInt(addonquantity) + 1).toString());
  };
  const decreaseAddonQuantity = () => {
    if (parseInt(addonquantity) > 1) {
      setAddonQuantity((parseInt(addonquantity) - 1).toString());
    }
  };

  // console.log(item.foodAddonPrice);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={[tw`relative`]}>
        <Image
          style={tw`w-full h-80`}
          source={{
            uri: item.foodImageUrl.replace('localhost', '192.168.39.109'),
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={tw`absolute top-8 left-4 bg-gray-50 p-2 rounded-full shadow`}>
          <Icon name="arrow-back" size={25} color="black"></Icon>
        </TouchableOpacity>
      </View>
      <View
        style={[
          {borderTopLeftRadius: 40, borderTopRightRadius: 40},
          tw`bg-white -mt-10 pt-6`,
        ]}>
        <View style={tw`px-5`}>
          <Text style={tw`font-bold text-3xl`}>{item.foodName}</Text>
          <View style={tw`flex-row my-1`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-gray-700`}>
                <Text style={tw`font-semibold`}>{item.foodCategory} • </Text>
              </Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-gray-700`}>
                <Text style={tw`text-xs`}>
                  {item.restaurantAddressBuilidng}{' '}
                  {item.restaurantAddressStreet}
                  {', '}
                  {item.restaurantAddressCity}
                </Text>
              </Text>
            </View>
          </View>
          <Text style={tw`text-gray-700`}>{item.foodDescription}</Text>

          <View style={tw`flex-row items-center h-20 justify-between pl-1`}>
            <Text
              style={[
                {textAlign: 'left', color: '#e63946'},
                tw`mt-0 font-bold text-xl `,
              ]}>
              {item.foodPrice} đ
            </Text>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity
                style={[{backgroundColor: '#F88A37'}, tw`p-2 rounded-full`]}
                onPress={() => decreaseQuantity()}>
                <Icon name="remove"></Icon>
              </TouchableOpacity>
              <TextInput value={quantity} style={tw`px-3`}></TextInput>
              <TouchableOpacity
                style={[{backgroundColor: '#F88A37'}, tw`p-2 rounded-full`]}
                onPress={() => increaseQuantity()}>
                <Icon name="add"></Icon>
              </TouchableOpacity>
            </View>
          </View>
          <Cardslider title={'Có thể bạn sẽ thích'} data={foodData} />
        </View>

        <View style={[tw`h-28 flex-row items-center justify-between`]}>
          <Text style={tw`font-bold text-2xl px-6`}>{'Total Price'}</Text>
          {item.foodAddonPrice !== '' ? (
            <Text style={tw``}></Text>
          ) : (
            <Text
              style={[
                {color: 'green', justifyContent: 'between'},
                tw`font-bold text-2xl px-3 pl-20`,
              ]}>
              {(parseInt(item.foodPrice) * parseInt(quantity)).toString()}
              {'.000đ'}
            </Text>
          )}
        </View>
      </View>

      <View
        style={tw`bottom-5 w-full z-50 flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`flex-row justify-between items-center mx-5 rounded-full shadow-lg`}
          onPress={() => addToCart()}>
          <Text
            style={[
              {backgroundColor: '#F88A37'},
              tw`font-extrabold text-white text-xl p-2 px-4 rounded-full`,
            ]}>
            {'Thêm vào giỏ hàng'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row justify-between items-center mx-5 rounded-full shadow-lg`}>
          <Text
            style={[
              {backgroundColor: '#F88A37'},
              tw`font-extrabold text-white text-xl p-2 px-4 rounded-full`,
            ]}>
            {'Mua ngay'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});

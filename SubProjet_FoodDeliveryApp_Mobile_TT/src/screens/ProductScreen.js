import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons';
import Cardslider from '../components/Cardslider';
import {firebase} from '../../Config/FirebaseConfig';

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
          <Text
            style={[
              {textAlign: 'left', color: '#e63946'},
              tw`mt-5 font-bold text-xl`,
            ]}>
            {item.foodPrice} đ
          </Text>
        </View>
      </View>
      <Cardslider title={'Có thể bạn sẽ thích'} data={foodData} />

      <View
        style={tw`bottom-0 w-full z-50 flex-row justify-center items-center`}>
        <TouchableOpacity
          style={tw`flex-row justify-between items-center mx-5 rounded-full shadow-lg`}>
          <Text
            style={[
              {backgroundColor: '#F88A37'},
              tw`font-extrabold text-white text-xl p-2 px-4 rounded-full`,
            ]}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row justify-between items-center mx-5 rounded-full shadow-lg`}>
          <Text
            style={[
              {backgroundColor: '#F88A37'},
              tw`font-extrabold text-white text-xl p-2 px-4 rounded-full`,
            ]}>
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});

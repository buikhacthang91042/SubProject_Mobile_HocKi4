import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import {StatusBar} from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/categories';

import OfferSlide from '../components/OfferSlide';
import {firebase} from '../../Config/FirebaseConfig';
import Cardslider from '../components/Cardslider';
import {FlatList} from 'react-native-gesture-handler';
export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [buoiSangData, setBuoiSangData] = useState([]);
  const [nonVgData, setNonVegData] = useState([]);

  const foodRef = firebase.firestore().collection('FoodData');
  //  console.log(search);

  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
      setFoodData(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  //  console.log(foodData);

  useEffect(() => {
    setBuoiSangData(foodData.filter(item => item.mealType == 'breakfast'));
    setNonVegData(foodData.filter(item => item.foodType == 'non-veg'));
  }, [foodData]);
  // console.log(vegData);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        {/* Thanh tìm kiếm */}

        <View style={style.searchContainer}>
          <Icon name="search" size={25} color="gray" style={style.searchIcon} />
          <TextInput
            placeholder="Tìm kiếm"
            style={style.searchInput}
            onChangeText={text => {
              setSearch(text);
            }}
          />
        </View>

        {search != '' && (
          <View style={style.searchResultouter}>
            {/* <Text>Bạn đã nhập</Text> */}
            <FlatList
              style={style.searchResultinner}
              data={foodData}
              renderItem={({item}) => {
                if (
                  item.foodName
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return (
                    <View style={style.searchResult}>
                      <Icon
                        name="caret-forward-outline"
                        size={25}
                        color="gray"
                        style={style.searchIcon}
                      />
                      <Text style={style.searchResultText}>
                        {item.foodName}
                      </Text>
                    </View>
                  );
                }
              }}
            />
          </View>
        )}

        <Categories />
        <OfferSlide />
        <Cardslider title={'Món ngon hôm nay'} data={foodData} />
        <Cardslider
          title={'Sáng no nê với Quán ngon siêu đỉnh'}
          data={buoiSangData}
        />
        <Cardslider title={'Không phải món chay'} data={nonVgData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#424242',
  },
  searchResultouter: {
    width: '100%',
    marginHorizontal: 16,
    marginTop: 8,
  },
  searchResultinner: {
    width: '100%',
  },
  searchResult: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchResultText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#212121',
  },
});

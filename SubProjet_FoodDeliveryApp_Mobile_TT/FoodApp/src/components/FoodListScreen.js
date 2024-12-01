import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useFoodContext} from '../../context/FoodContext';
import {firebase} from '../../Config/FirebaseConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const FoodListScreen = () => {
  const {selectedCategory} = useFoodContext();
  const [foods, setFoods] = useState([]);
  const navigation = useNavigation();

  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <Image
            key={i}
            source={require('../../assets/star_filled.png')}
            style={styles.star}
          />,
        );
      } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
        stars.push(
          <Image
            key={i}
            source={require('../../assets/star_half.png')}
            style={styles.star}
          />,
        );
      } else {
        stars.push(
          <Image
            key={i}
            source={require('../../assets/star_empty.png')}
            style={styles.star}
          />,
        );
      }
    }
    return stars;
  };

  const openPage = item => {
    navigation.navigate('HomeTabs', {
      screen: 'Home',
      params: {screen: 'Product', params: item},
    });
  };

  useEffect(() => {
    if (selectedCategory) {
      const fetchFoods = async () => {
        try {
          const foodsCollection = await firebase
            .firestore()
            .collection('FoodData')
            .get();
          const foodsList = foodsCollection.docs.map(doc => doc.data());
          const filteredFoods = foodsList.filter(
            food => food.foodCategory === selectedCategory,
          );
          setFoods(filteredFoods);
        } catch (error) {
          console.log('Error fetching foods:', error);
        }
      };
      fetchFoods();
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.goBack()}
        style={tw`absolute top-8 left-4 bg-gray-50 p-2 rounded-full shadow`}>
        <Icon name="arrow-back" size={25} color="black" />
      </TouchableWithoutFeedback>
      <View style={styles.header}>
        <Text style={styles.categoryText}>{selectedCategory}</Text>
      </View>
      {/* Hiển thị thông báo nếu không có sản phẩm */}
      {foods.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Chưa có sản phẩm</Text>
        </View>
      ) : (
        <FlatList
          data={foods}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback key={item} onPress={() => openPage(item)}>
              <View style={styles.foodItem}>
                <Image
                  source={{
                    uri: item.foodImageUrl.replace('localhost', '192.168.1.9'),
                  }}
                  style={styles.foodImage}
                />
                <Text style={styles.foodName}>{item.foodName}</Text>
                <Text style={styles.foodPrice}>
                  Giá: {item.foodPrice} VNĐ
                </Text>
                <View style={styles.ratingContainer}>
                  {renderStars(item.foodRating)}
                  <Text style={styles.ratingText}>
                    {item.foodRating || 0}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF3D00',
    marginLeft: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  foodItem: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
  },
  foodImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  foodPrice: {
    fontSize: 16,
    color: '#FF6F00',
    marginVertical: 5,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 2,
    tintColor: '#fbbc05',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 0,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#aaa',
    fontStyle: 'italic',
  },
});

export default FoodListScreen;

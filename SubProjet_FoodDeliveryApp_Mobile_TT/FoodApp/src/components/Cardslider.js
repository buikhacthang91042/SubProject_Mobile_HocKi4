import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Cardslider = ({title, data}) => {
  // console.log(title);
  const navigation = useNavigation();
  // console.log(title);
  const openPage = item => {
    // console.log(item);
    // console.log(navigation);
    navigation.navigate('Product', item);
  };
  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Sao đầy
        stars.push(
          <Image
            key={i}
            source={require('../../assets/star_filled.png')}
            style={styles.star}
          />
        );
      } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
        // Nửa sao (khi rating có phần thập phân)
        stars.push(
          <Image
            key={i}
            source={require('../../assets/star_half.png')}
            style={styles.star}
          />
        );
      } else {
        // Sao trống
        stars.push(
          <Image
            key={i}
            source={require('../../assets/star_empty.png')}
            style={styles.star}
          />
        );
      }
    }
    return stars;
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.cardoutheader}>{title}</Text>
      <FlatList
        style={styles.cardsout}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
            
          <TouchableWithoutFeedback key={item} onPress={() => openPage(item)}>
          <View style={styles.card}>
            <View style={styles.s1}>
              <Image
                source={{
                  uri: item.foodImageUrl.replace(
                    'localhost',
                    '192.168.1.9',
                  ),
                }}
                style={styles.cardImage}
              />
            </View>

            <View style={styles.s2}>
              <Text style={styles.txt1}>{item.foodName}</Text>
              <View style={styles.s2in}>
                <Text style={styles.txt2}>{item.foodPrice}đ</Text>
              </View>
            </View>
            <View style={styles.s3}>
  <View style={styles.ratingContainer}>
    {renderStars(item.foodRating)}
    <Text style={styles.ratingText}>{item.foodRating || 0}</Text>
  </View>
</View>
          </View>
        </TouchableWithoutFeedback>
          
        )}
      />
    </View>
  );
};

export default Cardslider;

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
    },
    cardoutheader: {
      fontSize: 24,
      color: '#333', 
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginBottom: 15, 
    },
    cardsout: {
      width: '100%',
    },
    card: {
      width: 280, 
      height: 260,
      marginHorizontal: 10,
      borderRadius: 15,
      backgroundColor: '#ffffff',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    cardImage: {
      width: '100%',
      height: 180,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    s2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    txt1: {
      fontSize: 16,
      color: '#333',
      fontWeight: '600',
      width: '65%', 
    },
    txt2: {
      fontSize: 18,
      color: '#e63946', 
      fontWeight: 'bold',
    },
    s2in: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    s3: {
      
      position: 'absolute',
      bottom: 15,
      width: '100%',
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
      marginHorizontal:8
    },
    ratingText: {
      marginLeft: 5, 
      fontSize: 14,
      color: '#333',
    },
    
  });
  

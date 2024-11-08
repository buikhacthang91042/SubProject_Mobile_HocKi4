import { View, Text, TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
export default function Restaurants({item}) {
  return (
    <TouchableWithoutFeedback>
      <View style={[tw`mr-6  bg-white rounded-3xl shadow-lg mb-1`,{shadowColor:themeColors.bgColor(0.9),shadowRadius:7}]}>
        <Image style={tw`h-36 w-64 rounded-t-xl`}  source={item.image}/>
        <View style={[tw`px-3 pb-4`,{marginTop:4} ]}>
          <Text style={tw`text-lg font-bold `}>{item.name}</Text>
          <View style={[tw`flex-row items-center`,{}]}>
              <Image source={require('../assets/images/star.png')} style={tw`h-4 w-4`}/>
              <Text style={[tw `text-green-700 ml-1`,{}]}>{item.starts}</Text>
              <Text style={tw`text-gray-700 ml-2`}>({item.reviews} đánh giá)</Text>
              <Text style={tw`ml-2 font-semibold`}>.{item.category.name}</Text>
          </View>
          <View style={[tw`flex-row items-center`,{marginTop:8}]}>
              <Icon.MapPin color="gray" width="15" height="15" />
              <Text style={tw`text-gray-700 text-xs ml-1`}>{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
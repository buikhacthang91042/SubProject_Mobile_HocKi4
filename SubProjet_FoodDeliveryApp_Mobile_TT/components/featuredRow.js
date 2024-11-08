import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { themeColors } from '../theme'
import Restaurants from './restaurant'

export default function FeaturedRow({title, description,restaurants}) {
  return (
    <View>
        <View style={tw`flex-row justify-between items-center px-4`}>
            <View>
                <Text style={tw`font-bold text-lg`}>{title}</Text>
                <Text style={tw`text-gray-500 text-xs`}>{description}</Text>
            </View>
            <TouchableOpacity>
                <Text style={[tw`font-semibold`,{color: themeColors.text}]}>See all</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{
                 paddingHorizontal: 15
             }}
             style={tw`overflow-visible py-5  `}
        
        >
           {restaurants.map((restaurant,index)=> {
                return (
                    <Restaurants
                        item= {restaurant}
                        key={index}

                    />
                )
           })}


        </ScrollView>
    </View>

  )
}
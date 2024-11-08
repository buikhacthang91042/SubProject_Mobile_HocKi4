import { View, Text, ScrollView, TouchableOpacity, Image,StyleSheet  } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import {categories} from '../constants'
export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <View style={tw`mr-4`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={tw`overflow-visible`}
            contentContainerStyle={{
                paddingHorizontal:15
            }}
        > 
            {
                categories.map((category, index) => {
                    let chon = category.id==selectedCategory;
                    let doiMauNut = chon ? tw`bg-gray-600` : tw`bg-gray-200`;
                    let doiMauChu = chon ? tw`font-semibold text-gray-800` : tw`text-gray-500`;
                    return(
                        <View key={index} style={tw`flex justify-center items-center mr-6`}>
                            <TouchableOpacity 
                                style={[tw`p-1 rounded-full shadow bg-gray-200`, doiMauNut]}
                                onPress={()=> setSelectedCategory(category.id)}
                            >
                                <Image source={category.image} style={styles.categories_image}></Image>
                                
                            </TouchableOpacity>
                            <Text style={[tw`text-sm`, doiMauChu]}>{category.name}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
    categories_image: {
        width:45,
        height:45,
        borderRadius: 22.5,
        overflow: 'hidden'
    }
})
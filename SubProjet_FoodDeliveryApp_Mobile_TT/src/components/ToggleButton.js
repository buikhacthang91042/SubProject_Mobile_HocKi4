import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function ToggleButton() {
  return (
    <View style={styles.container}>
      <View style={styles.toggle}></View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"red",
        height:32,
        width:64,
        borderRadius:32,
    },
    toggle: {
        height:24,
        width:24,
        
    }
})
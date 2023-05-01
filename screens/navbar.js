import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const navbar = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.h1}>Vallaris Map</Text>
    </View>
  )
}

export default navbar

const styles = StyleSheet.create({
    heading: {
        
        margin:0,
        padding:0,
        backgroundColor:"#363636",
        textAlign: "center",

        
    },
    h1:{
        padding:12,
        margin:0,
        color:"white",
        textAlign:"center",
        fontSize: 15,
        fontFamily: 'Prompt-Medium',
        fontWeight:"bold"
    }
})
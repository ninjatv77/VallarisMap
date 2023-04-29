import React from 'react';
import { StyleSheet, TochableOpacity, Text, View } from 'react-native';


export default function FlatButton ({text, onPress}){
    return(
        <TochableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>


        </TochableOpacity>

    )

}

const styles =StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal:10,
        backgroundColor: '#f01d71',

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign:'center'
    }

})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import VallarisMap from './screens/VallarisMap';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false }} />
      
       
        <Stack.Screen 
        name="VallarisMap"
        component={VallarisMap} 
        options={{
          headerTitleAlign:"center",
          headerBackTitle:"back",
          title:"Vallaris Map",
          headerTintColor:"black",
        
        }} 
        
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

  

})
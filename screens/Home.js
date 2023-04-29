import { StyleSheet, Text, View } from 'react-native'
import React,{ useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [user,setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchUser = async () => {
        const accessToken = await AsyncStorage.getItem('@accessToken')
        const response = await fetch('https://cloud.vallarismaps.com/core/api/utilities/1.0/profiles',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ accessToken
            },
        })
        const data = await response.json()
        
         setUser(data)
         setIsLoading(false)
    }

    useEffect(() => {
        fetchUser()

    },[isLoading])


  return (
    <View>
       <Text>Home</Text>
      {
        isLoading ?
          <Text>Loading</Text>
        :
          <View>
            <Text>{user.firstName} {user.lastName}</Text>
          </View>
      }
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({



})
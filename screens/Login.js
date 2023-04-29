import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useState, userEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginBtn from '../assets/Buttons/LogingBtn';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);

const Login = ({ navigation }) => {
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const hadleLogin = async () => {
    const response = await fetch(
      'https://cloud.vallarismaps.com/core/api/utilities/1.0/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
    const data = await response.json()
    try {
      if (data.accessToken !== '0') {
        Alert.alert('Login', 'Success',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        await AsyncStorage.setItem('@accessToken', data.accessToken)
        const accessToken = await AsyncStorage.getItem('@accessToken')
        navigation.navigate('VallarisMap')


      }
    } catch (e) {
      Alert.alert(data.code, data.description,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../img/vallaris.png')}
          style={{ width: 134, height: 155 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: 'Prompt-Medium',
          paddingBottom: 5
        }}>Welcome to <Text style={{
          color: "rgb(178, 199, 86)"
        }}>Vallaris</Text> </Text>
        <View>
          <Text style={{
          textAlign: "center",
          fontSize: 14,
          fontFamily: 'Prompt-Medium',
          paddingBottom: 5
        }}>
            Enter e-mail and password for start
          </Text>
        </View>
        <TextInput

          label="Email"
          value={email}
          onChangeText={text => setUsername(text)}
          mode='outlined'
          theme={styles.input}
          style={{
            marginVertical:12
          }}
        />
        <TextInput
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          theme={styles.input}
          mode='outlined'
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonSty} mode="contained" onPress={hadleLogin}>
          <Text>Log in</Text>
        </Button>

      </View>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '50%',
  },
  imageContainer: {
    alignSelf: 'center',
    paddingBottom: 14,
    marginBottom: 20,
  },
  inputContainer: {
    paddingBottom: 14,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '50%',

  },
  buttonSty: {
    backgroundColor: 'rgb(178, 199, 86)',

  },
  input: {
    colors: {
      placeholder: 'white',
      text: 'white', primary: 'black',
      underlineColor: 'transparent',

    }
  }


});

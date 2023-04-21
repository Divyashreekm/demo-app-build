import { ImageBackground,Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGm6E29EZeMgrik4weIJxDLb36O1cbthoRqzHR-0VDzvhaVJqxtmvqQc-vg7X06hc55Kc&usqp=CAU'};

const home2 = () => {
  const navigation =useNavigation();
  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>"CONTACT LIGHT"</Text>
      <Button style={styles.buttonContainer}title='REGISTER' onPress={() => navigation.navigate("home3")}/>
      <Button style={styles.buttonContainer}title='LOGIN' onPress={() => navigation.navigate("home4")}/>
    </ImageBackground>
  </View>
 
 
);
  }

  export default home2
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'space-between'
    },
    image: {
      width:'100%',
      height:'100%',
    },
    text: {
      color: 'blue',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainer: {
      flex: 1,
    },
    button: {
      backgroundColor: '#0782F9',
      marginTop:100,
      padding: 50,
      borderRadius: 20,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 100,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
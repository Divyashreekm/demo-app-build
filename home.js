import { ImageBackground,Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XgqAaGJL-RDc7cJkKAgGagzwZ2OqkXeqTQ&usqp=CAU'};

const App = () => {
  const navigation =useNavigation();
  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}></Text>
      
      <Button title='SPACE' onPress={() => navigation.navigate("home2")}/>
    </ImageBackground>
  </View>
);
  }

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
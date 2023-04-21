import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import home from './src/home';
import home2 from './src/home2';
import home3 from './src/home3';
import home4 from './src/home4';
import home5 from  './src/home5';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={home}/>
      <Stack.Screen name="home2" component={home2}/>
      <Stack.Screen name="home3" component={home3}/>
      <Stack.Screen name="home4" component={home4}/>
      <Stack.Screen name="home5" component={home5}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
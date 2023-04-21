import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';


const home3 = () => {
    const navigation =useNavigation();
  const [name, setName] = useState('')
  const [mobilenumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [domainname, setDomainName] = useState('')
  const [collegename, setCollegeName] = useState('')
  const [branch, setBranch] = useState('')
  const [yearofpassing, setYearOfPassing] = useState('')
  useEffect(() => {
 
  }, [])

 const handleSubmit = () => {
    console.log("ok2")
    navigation.navigate("home5")
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TouchableOpacity>
        <TextInput
          placeholder="MobileNumber"
          value={mobilenumber}
          onChangeText={Number => setMobileNumber(Number)}
          style={styles.input}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        /> 
        </TouchableOpacity> 
        <TouchableOpacity>
        <TextInput
          placeholder="DomainName"
          value={domainname}
          onChangeText={text => setDomainName(text)}
          style={styles.input}
        />   
        </TouchableOpacity>
        <TouchableOpacity>
         <TextInput
          placeholder="CollegeName"
          value={collegename}
          onChangeText={text => setCollegeName(text)}
          style={styles.input}
        /> 
        </TouchableOpacity>
        <TouchableOpacity>
         <TextInput
          placeholder="Branch"
          value={branch}
          onChangeText={text => setBranch(text)}
          style={styles.input}
        />
      </TouchableOpacity>
      <TouchableOpacity>
         <TextInput
          placeholder="Year_Of_Passing"
          value={yearofpassing}
          onChangeText={Number => setYearOfPassing(Number)}
          style={styles.input}
        />
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
          
      </View>
    </KeyboardAvoidingView>
  )
}

export default home3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
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

import React from "react";
import { View, Text, StyleSheet,
        Image,
        TextInput,
        TouchableOpacity } from "react-native";
export default function SignIn(){
  return(
    <View style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('../../assets/logo.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Digite seu email"
          style={styles.input}
          placeholderTextColor="#7C7C8A"/>
        <TextInput 
          placeholder="Digite sua senha"
          style={styles.input}
          placeholderTextColor="#7C7C8A"
          secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>  
        </TouchableOpacity>  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#121214',
},

logo:{
  marginBottom: 18
},

inputContainer:{
  width: '95%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 34,
  paddingHorizontal: 14,
  
},
input: {
  width: '95%',
  height: 40,
  backgroundColor: '#202024',
  marginBottom: 12,
  borderRadius: 4,
  paddingHorizontal: 8,
  color: '#E1E1E6',
  fontSize:  18
},
button: {
  width: '95%',
  height: 40,
  backgroundColor: '#41A4C3',
  marginBottom: 12,
  borderRadius: 4,
  paddingHorizontal: 8,
  justifyContent: 'center',
  alignItems: 'center',

},
buttonText: {
  fontSize: 18,
  color:  '#E1E1E6'
}
})
import {View, Button, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from './styles';
import {useState} from 'react';


function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/Tela.jpeg')} />
      <Text style = {styles.text_header}>Chibi Master</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={() => {}} />
      <View style={{ height: 20 }} />
      <Button title="Cadastrar" onPress={() => {}} />
    </View>
  );
}

export default App;
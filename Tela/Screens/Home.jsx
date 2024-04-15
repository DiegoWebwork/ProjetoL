import {View, Button, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from '../static/styles';
import {useState} from 'react';

function Home(props) {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Tela.jpeg')} />
      <Text style = {styles.text_header}>Chibi Masters</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={() => {}} />
      <View style={{ height: 20 }} />
      <Button title="Cadastrar" onPress={() => props.navigation.navigate('Sign-in')} />
    </View>
  );
}

export default Home;
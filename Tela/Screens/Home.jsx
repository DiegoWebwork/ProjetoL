import {View, Button, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from '../static/styles';
import {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function Home(props) {
    const navigation= useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const userData = {
            email: email,
            password,
        };
        axios.post('http://10.0.0.5:3000/login-user', userData).then(res => {
        console.log(res.data);
        if (res.data.status == 'ok') {navigation.navigate('User');
        }
        });

    }
    return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/Tela.jpeg')} />
          <Text style = {styles.text_header}>Chibi Masters</Text>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <Button title="Entrar" onPress={() => {}} />
          <View style={{ height: 20 }} />
          <Button title="Cadastrar" onPress={() => props.navigation.navigate('Sign-in')} />
        </View>
      );
}

export default Home;
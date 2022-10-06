import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DataService from '../service/DataService';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = async () => {
        try {
            const data = {
                username: email,
                password: password
            };
            const response = await DataService.login(data);
            navigation.navigate('QRCode');
        } catch (e) {
            console.log(e);

            Alert.alert('erro');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Email." placeholderTextColor="#003f5c" onChangeText={(email) => setEmail(email)} />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Password." placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        marginBottom: 40
    },

    inputView: {
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,

        alignItems: 'center'
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },

    forgot_button: {
        height: 30,
        marginBottom: 30
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#FF1493'
    }
});
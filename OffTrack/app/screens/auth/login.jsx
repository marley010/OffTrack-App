import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Foutmelding", "Vul alle velden in!");
            return;
        }

        try {
            const userData = await AsyncStorage.getItem('user');
            if (!userData) {
                Alert.alert("Foutmelding", "Geen account gevonden. Registreer eerst!");
                return;
            }

            const { email: storedEmail, password: storedPassword } = JSON.parse(userData);

            if (email === storedEmail && password === storedPassword) {
                Alert.alert("Succes", "Inloggen gelukt!");
                router.push('/screens/tabs/home'); // Navigeer naar home
            } else {
                Alert.alert("Foutmelding", "Onjuiste e-mail of wachtwoord!");
            }
        } catch (error) {
            Alert.alert("Fout", "Er is iets misgegaan. Probeer opnieuw.");
        }
    };

    return (
        <ImageBackground 
            source={require("../../../assets/images/venice.png")} 
            style={styles.background}
        >
            <View style={styles.overlay}>
                <Image 
                    source={require("../../../assets/images/offtrack.png")}
                    style={styles.logo} 
                    resizeMode="contain" 
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Pressable style={styles.pressableCreate} onPress={handleLogin}> 
                    <Text style={styles.pressableTextCreate}>LOGIN</Text>
                </Pressable>

                <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text style={styles.text}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 350,
    },
    logo: {
        width: 200, 
        height: 150, 
        marginBottom: 20, 
        position: "absolute", 
        top: 30, 
        left: 10, 
    },
    text: {
        paddingTop: 30,
        fontSize: 14,
        color: "white",
        textAlign: "center",
        textDecorationLine: "underline",
    },
    input: {
        backgroundColor: "white",
        width: 300,
        paddingVertical: 10,
        borderRadius: 20, 
        marginVertical: 10,
        textAlign: "center",
        fontSize: 16,
        color: "black",
    },
    pressableCreate: {
        backgroundColor: "black",
        width: 300, 
        paddingVertical: 10,
        borderRadius: 20, 
        marginVertical: 10,
        alignItems: "center",
    },
    pressableTextCreate: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

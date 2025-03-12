import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, ImageBackground, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Foutmelding", "Alle velden moeten ingevuld zijn!");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Foutmelding", "Wachtwoorden komen niet overeen!");
            return;
        }

        // Hier kun je de registratie-logica toevoegen, bijvoorbeeld een API-aanroep.

        Alert.alert("Succes", "Account is aangemaakt!");
        router.push('/screens/tabs/home');
    };

    return (
        <ImageBackground 
            source={require("../../../assets/images/realplane.png")} 
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

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <Pressable style={styles.pressableCreate} onPress={handleRegister}> 
                    <Text style={styles.pressableTextCreate}>Create Account</Text>
                </Pressable>

                <Text style={styles.text}>Already have an account? Sign in</Text>
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
        fontSize: 12,
        color: "black",
        textAlign: "center",
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

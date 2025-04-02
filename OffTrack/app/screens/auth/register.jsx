import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Zorg ervoor dat AsyncStorage wordt geïmporteerd

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Foutmelding", "Alle velden moeten ingevuld zijn!");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Foutmelding", "Wachtwoord moet minimaal 6 tekens lang zijn!");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Foutmelding", "Wachtwoorden komen niet overeen!");
            return;
        }

        try {
            // Gebruikersgegevens opslaan in AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
            
            // Log de opgeslagen gegevens om te controleren of het goed werkt
            const storedUser = await AsyncStorage.getItem('user');
            console.log("Stored user data:", storedUser);  // Controleer in de console of de gegevens goed worden opgeslagen
            
            Alert.alert("Succes", "Account is aangemaakt!");
            router.push('/screens/auth/login'); // Gebruik de volledige padnaam
        } catch (error) {
            // Log de fout in de console voor debuggen
            console.error("Error during registration:", error);
            Alert.alert("Fout", "Er is iets misgegaan. Probeer het opnieuw.");
        }
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

                <TouchableOpacity onPress={() => router.push('/login')}>
                    <Text style={styles.text}>Already have an account? Sign in</Text>
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
        color: "black",
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

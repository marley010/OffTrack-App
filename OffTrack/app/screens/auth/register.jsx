import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
    const router = useRouter();

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

                <Pressable style={styles.pressable}>
                    <Text style={styles.pressableText}>Email Adress</Text>
                </Pressable>

                <Pressable style={styles.pressable}> 
                    <Text style={styles.pressableText}>Password</Text>
                </Pressable>

                <Pressable style={styles.pressable} > 
                    <Text style={styles.pressableText}>Comfirm Password</Text>
                </Pressable>

                <Pressable style={styles.pressableCreate} onPress={() => router.push('/screens/tabs/home')}> 
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
        alignItems: "center",
        paddingTop: 30,
        fontSize: 8,
        color: "black",
        width: "70%",
        alignSelf: "flex-start",
        paddingLeft: 71,
        letterSpacing: 2
    },
    pressable: {
      backgroundColor: "white",
      width: 300,
      paddingVertical: 10,
      borderRadius: 20, 
      marginVertical: 10,
      alignItems: "center",
  },
  pressableText: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
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

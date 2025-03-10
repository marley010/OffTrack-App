import { View, Text, StyleSheet, Pressable, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar hidden={true} />
      <View style={styles.overlay}>
        
        {/* Logo toevoegen */}
        <Image 
          source={require("../assets/images/offtrack.png")}  
          style={styles.logo} 
          resizeMode="contain" 
        />

        <Text style={styles.text}>Explore a new world with us</Text>

        <Pressable style={styles.pressable} onPress={() => router.push("/screens/auth/register")}>
          <Text style={styles.pressableText}>Register</Text>
        </Pressable>

        <Pressable style={styles.pressable} onPress={() => router.push("/screens/auth/login")}> 
          <Text style={styles.pressableText}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
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
    paddingTop: 300,
    fontSize: 40,
    color: "white",
    marginBottom: 60,
    width: "70%",
    alignSelf: "flex-start",
    paddingLeft: 20,
    fontWeight: "bold",
    letterSpacing: 2
  },
  pressable: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 125, 
    borderRadius: 8, 
    marginVertical: 10,
    alignItems: "center",
  },
  pressableText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

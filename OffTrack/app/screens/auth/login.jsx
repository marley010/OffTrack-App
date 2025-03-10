import { StyleSheet, Text, View, Button } from 'react-native'
import { useRouter } from 'expo-router';

export default function Login() {

    const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title='terug' onPress={() => router.back()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
    })
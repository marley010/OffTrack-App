import { StyleSheet, Text, View, Button } from 'react-native'
import { useRouter } from 'expo-router';

export default function Register() {

    const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Register</Text>
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
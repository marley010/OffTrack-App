import { StyleSheet, Text, View } from 'react-native'

export default function homeScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>home</Text>
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
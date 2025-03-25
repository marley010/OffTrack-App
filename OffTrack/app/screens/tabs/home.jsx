import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const DATA = [
  { id: 1, title: '', image: require("../../../assets/images/barcelona.png") },
  { id: 2, title: '', image: require("../../../assets/images/newYork.png") },
  { id: 3, title: '', image: require("../../../assets/images/tokyo.png") },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push('/screens/tabs/add')}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 330,
    height:150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

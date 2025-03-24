import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const DATA = [
  { id: 1, title: 'Barcelona', image: "./assets/images/barcelona.png" },
  { id: 2, title: 'New York', image: "./assets/images/newYork.png" },
  { id: 3, title: 'Tokyo', image: "./assets/images/tokyo.png" },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image 
              source={item.image} 
              style={styles.image} 
            />
            <Text style={styles.text}>{item.title}</Text>
          </View>
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
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

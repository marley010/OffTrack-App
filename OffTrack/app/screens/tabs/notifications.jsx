import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simuleer een API-call
    const fetchNotifications = async () => {
      const data = [
        {
          id: '1',
          name: 'Jason',
          message: 'Ik luv het maatje! Lekker op die goede dingen. Siii!',
          avatar: require("../../../assets/images/jason.jpg"),
        },
        {
          id: '2',
          name: 'Bram',
          message: 'Ai ik hoor je. Ik wist niet dat jij dat op dat grote geld was 🤯',
          avatar: require("../../../assets/images/bram.jpg"),
        },
        {
          id: '3',
          name: 'Cristiano',
          message: 'Muito bom primo. O trabalho duro finalmente valeu a pena',
          avatar: require("../../../assets/images/cristiano.jpg"),
        },
        {
          id: '4',
          name: 'Cloakje',
          message: 'ik weet waar je bed slaapt',
          avatar: require("../../../assets/images/bart.jpg"),
        },
        {
          id: '5',
          name: 'Bas',
          message: 'Goedendag, ik zie dat u goed heeft kunnen genieten van uw verblijf. Geniet ervan...',
          avatar: require("../../../assets/images/bas.jpg"),
        },
        {
          id: '6',
          name: 'Strontvlieg',
          message: 'Potje fortnite gisteren was craaazy! Die dub die we hebben gepakt was fenomenaal.',
          avatar: require("../../../assets/images/strontvlieg.jpg"),
        },
      ];
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && response.assets) {
        setAvatar({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔔 Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Image source={item.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name} posted:</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#555',
  },
});


export default NotificationsScreen;

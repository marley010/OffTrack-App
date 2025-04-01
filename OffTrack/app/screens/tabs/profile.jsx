import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/images/mateo-nCU4yq5xDEQ-unsplash.jpg")} style={styles.headerImage} />
        <Image source={require("../../../assets/images/messi.png")} style={styles.profileImageOverlay} />
      </View>

      <View style={styles.profileSection}>
        <Text style={styles.name}>Marley de Kijsser</Text>
        <Text style={styles.pronouns}>he/him</Text>
        <View style={styles.bioCard}>
          <Text style={styles.bio}>
            Marley is a man who has a passion for gaming. whether he is at home or at a friends house, he games with his friends.
          </Text>
        </View>
      </View>

      <Text style={styles.favoritesTitle}>❤️ My favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.favoritesContainer}>
        <Image source={require("../../../assets/images/bartelona.png")} style={styles.favoriteImage} />
        <Image source={require("../../../assets/images/newyorkie.png")} style={styles.favoriteImage} />
        <Image source={require("../../../assets/images/tokio.png")} style={styles.favoriteImage} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 200, 
    justifyContent: "center", 
    alignItems: "center", 
    position: "relative" // Zorgt ervoor dat de profielfoto correct wordt gepositioneerd
  },
  headerImage: { 
    width: "100%", 
    height: "100%", 
    resizeMode: "cover", 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  profileImageOverlay: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    position: "absolute", 
    bottom: -50, // Zorgt ervoor dat de afbeelding deels in de header en deels eronder staat
    left: "50%", 
    marginLeft: -50, // Centreert de afbeelding
    borderWidth: 3, 
    borderColor: "#fff" // Optionele witte rand voor een strakke look
  },
  profileSection: { 
    alignItems: "center", 
    padding: 20, 
    marginTop: 50 // Zorgt voor extra ruimte na de profielfoto
  },
  name: { 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  pronouns: { 
    fontSize: 14, 
    color: "gray" 
  },
  bioCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bio: { 
    textAlign: "center", 
    fontSize: 16, 
    paddingHorizontal: 10 
  },
  favoritesTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginLeft: 20, 
    marginTop: 20 
  },
  favoritesContainer: { 
    flexDirection: "row", 
    marginTop: 10, 
    paddingHorizontal: 20 
  },
  favoriteImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 10, 
    marginRight: 10 
  },
});

export default ProfileScreen;

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cityDetails = {
  Barcelona: {
    period: "maart 2024 - april 2024",
    days: [
      {
        title: "Day 1",
        text: "Ik landde in Barcelona en wandelde door de Gotische wijk. Tapas en sangria in de avond!"
      },
      {
        title: "Day 2",
        text: "Bezocht de Sagrada Família en Park Güell. Wat een meesterwerken van Gaudí!"
      }
    ]
  },
  "New York": {
    period: "januari 2023",
    days: [
      {
        title: "Day 1",
        text: "Aangekomen in NYC, door Times Square gelopen en pizza gegeten 🍕"
      },
      {
        title: "Day 2",
        text: "Central Park en een Broadway-show — de energie van de stad is magisch!"
      }
    ]
  },
  Tokyo: {
    period: "oktober 2022",
    days: [
      {
        title: "Day 1",
        text: "Geland in Tokyo! Shibuya Crossing en sushi gegeten bij een izakaya 🍣"
      },
      {
        title: "Day 2",
        text: "Senso-ji tempel bezocht en ’s avonds neonverlichting in Akihabara bekeken."
      }
    ]
  }
};

export default function TripDetails() {
  const { city } = useLocalSearchParams();
  const trip = cityDetails[city];

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '2e3d2885c8776c86d5289116a0e3e919';  
      const formattedCity = encodeURIComponent(city);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${apiKey}&units=metric&lang=nl`;

      try {
        const response = await axios.get(url);
        const data = response.data;
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
        });
      } catch (err) {
        console.log('Fout bij ophalen weerdata:', err.response?.data || err.message);
        setError('Geen weerinformatie beschikbaar');
      }
    };

    fetchWeather();
  }, [city]);

  if (!trip) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Geen details gevonden voor: {city}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{city}</Text>
      <Text style={styles.date}>{trip.period}</Text>

      {weather ? (
        <View style={styles.weatherBox}>
          <Text style={styles.weatherText}>🌡️ {weather.temp}°C</Text>
          <Text style={styles.weatherText}>☁️ {weather.description}</Text>
        </View>
      ) : (
        <Text style={styles.fallbackText}>{error || 'Weerinformatie laden...'}</Text>
      )}

      {trip.days.map((day, index) => (
        <View key={index} style={styles.daySection}>
          <Text style={styles.dayTitle}>{day.title}</Text>
          <Text style={styles.text}>{day.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  weatherBox: {
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 16,
  },
  fallbackText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  daySection: {
    marginBottom: 24,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

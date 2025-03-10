import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="Home" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }} 
      />
    </Tabs>
  );
}

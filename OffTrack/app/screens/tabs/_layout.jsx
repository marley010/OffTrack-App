import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabsLayout() {
  return (
    <Tabs>
<Tabs.Screen 
  name="home"  // Let op de kleine letter "h"
  options={{ 
    title: "Home",
    tabBarIcon: ({ color, size }) => (
      <Entypo name="home" size={size} color={color} />
    ),
  }} 
/>
<Tabs.Screen 
  name="search"
  options={{ 
    title: "Search",
    tabBarIcon: ({ color, size }) => (
      <AntDesign name="search1" size={24} color={color} />
    ),
  }} 
/>
<Tabs.Screen 
  name="add"
  options={{ 
    title: "Add",
    tabBarIcon: ({ color, size }) => (
      <AntDesign name="plus" size={24} color={color} />
    ),
  }} 
/>
<Tabs.Screen 
  name="notifications"
  options={{ 
    title: "Notifications",
    tabBarIcon: ({ color, size }) => (
      <EvilIcons name="bell" size={24} color={color} />
    ),
  }} 
/>
<Tabs.Screen 
  name="profile"  // Let op de kleine letter "p"
  options={{ 
    title: "Profile",
    tabBarIcon: ({ color, size }) => (
      <FontAwesome name="user-circle" size={size} color={color} />
    ),
  }} 
/>

    </Tabs>
  );
}

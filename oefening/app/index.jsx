import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
export default function App() {
    return (
    <ImageBackground source={require('../assets/images/react-logo.png')} style={styles.background}>
        <View style={styles.view}>
            <Image style={styles.image} source={require('../assets/images/favicon.png')}></Image>
            <Text style={styles.title}>me</Text>
        </View>
    </ImageBackground>
    )
}


const styles = StyleSheet.create({
    view:{
        backgroundColor: "yellow",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title:{
        fontSize: 24,
        color: "blue"
    },

    image:{
    },

    background:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vh',
        height: '100vw+'
    },

})
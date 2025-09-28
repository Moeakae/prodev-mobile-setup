import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Welcome to ProDev Mobile App!</Text>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default App;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => (
  <View>
    <Text style={styles.largeText}>Typescript is great if you practice more</Text>
    <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
    <Text style={styles.smallText}>ALX is awesome</Text>
  </View>
);

const styles = StyleSheet.create({
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mediumText: {
    fontSize: 18,
    marginBottom: 6,
  },
  smallText: {
    fontSize: 14,
  },
});

export default App;

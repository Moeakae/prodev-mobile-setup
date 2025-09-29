import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="GlitchEd" />
      <Stack.Screen name="catalog" />
      <Stack.Screen name="course" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="aboutpage" />
    </Stack>
  );
}

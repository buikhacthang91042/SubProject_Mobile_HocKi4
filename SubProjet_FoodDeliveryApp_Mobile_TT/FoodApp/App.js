import { enableScreens } from 'react-native-screens';
enableScreens();
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './navigation';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FoodProvider } from './context/FoodContext';
export default function App() {
  return (
    <FoodProvider>
    <GestureHandlerRootView style={styles.container}>
    <StatusBar style="auto" />
    <Navigation />
  </GestureHandlerRootView>
  </FoodProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
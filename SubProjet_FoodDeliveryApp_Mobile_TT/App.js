import {enableScreens} from 'react-native-screens';
enableScreens();
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './navigation';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <Navigation />
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

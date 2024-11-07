import { enableScreens } from 'react-native-screens';
enableScreens();
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import Navigation from './navigation';

export default function App() {
  return (
    <Navigation />
  );
}
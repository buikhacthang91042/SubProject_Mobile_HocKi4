import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-red-500 text-lg`}>Hello</Text>
      <Text style={tw`text-3xl font-bold underline`}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
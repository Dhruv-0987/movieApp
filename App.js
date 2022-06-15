import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import BookingScreen from './screens/BookingScreen';
import Header from './components/Header';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='MovieScreen' component={MovieScreen} options={{headerShown:false}}/>
          <Stack.Screen name='BookingScreen' component={BookingScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

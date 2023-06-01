import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/Auth';
import HomeScreen from './screens/Home';
import ProjectScreen from './screens/Projects';
import SearchScreen from './screens/Search';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor='#141618' />
      <Stack.Navigator initialRouteName="Auth"
        screenOptions={{
          contentStyle: {
            backgroundColor: '#32a879'
          }
        }}>
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Projects" component={ProjectScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
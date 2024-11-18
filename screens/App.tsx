//if you ever fin any documentation telling you to use a app.js this is the counterpart
import React from 'react';
import 'react-native-gesture-handler';
import type {Node} from 'react';
import {SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LogInScreen';
//auth0
import {AuthContextProvider} from '../src/context/AuthContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="LogIn" 
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
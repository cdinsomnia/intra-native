import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import SvgComponent from '../components/logo-big';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import { useAuthorization } from '../components/api/api_connection';
import { config } from '../components/api/api_config';
import * as Animatable from 'react-native-animatable';

const AuthScreen = () => {
  const navigation = useNavigation();

  const { request, promptAsync } = useAuthorization(config, navigation);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [loaded] = useFonts({
    FuturaPT: require('../assets/fonts/FuturaPT/FuturaPTBook.otf'),
    FuturaPTMedium: require('../assets/fonts/FuturaPT/FuturaPTMedium.otf'),
    FuturaPTSemiBold: require('../assets/fonts/FuturaPT/FuturaPTDemi.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View className='mt-28'>
      <View>
    <Animatable.View animation="fadeIn" duration={2000} delay={5} className="flex-row items-center justify-center">
      <SvgComponent />
    </Animatable.View>
    <View className="justify-center justify-items-center mt-16">
    <Animatable.Text animation="fadeIn" duration={3000} className='text-white text-center text-4xl font-main_medium'>IMAGINE A PLACE</Animatable.Text>
    <Animatable.Text animation="fadeIn" duration={2000} delay={3} className='text-white text-center text-2xl font-main_medium'>WHERE YOUR STUDENT LIFE</Animatable.Text>
    <Animatable.Text animation="fadeIn" duration={1000} delay={5} className='text-white text-center text-4xl font-main_medium'>WILL GET EASIER.</Animatable.Text>
    <Animatable.Text animation="fadeIn" duration={800} delay={8} className='text-white text-center text-xl font-main_medium'>THIS IS ONE OF THEM.</Animatable.Text>
    </View>
    <View className='mt-40 justify-center items-center'>
      <ButtonPrimary title="Login with 42" onPress={() => promptAsync()} />
    </View>
  </View>
    </View>
  );
};

export default AuthScreen;
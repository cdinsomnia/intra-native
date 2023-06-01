import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import ButtonPrimarySmall from '../components/buttons/ButtonPrimarySmall';
import { clearAccessToken, getAccessToken } from '../components/api/api_token';
import ButtonSecondary from '../components/buttons/ButtonSecondary';
import { useNavigation } from '@react-navigation/native';
import { useAuthorization } from '../components/api/api_connection';
import { config } from '../components/api/api_config';
import * as Icons from "react-native-heroicons/outline";

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [loginName, setLoginName] = useState('');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [nextLevel, setNextLevel] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = await getAccessToken();
    
        const response = await fetch('https://api.intra.42.fr/v2/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          const firstName = data.first_name;
          const lastName = data.last_name;
          const fullName = `${firstName} ${lastName}`;
          setName(fullName);
          setPoints(data.correction_point);
          setWalletBalance(data.wallet);
          setLoginName(data.login);
          setLoading(false);
          setCurrentLevel(data.level);
          setNextLevel(data.level + 1);
          setProgress(data.cursus_users[0].level);
        } else {
          console.error('Failed to fetch user data:', response.status, response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const { logout } = useAuthorization(config, navigation);

  const handleLogout = () => {
    logout(); // Logout auslösen
  };

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="bg-black">
        <ImageBackground className='w-full h-44' source={require('../assets/HomeUserBG.png')}>
          <View className='flex-row gap-x-2 mt-3 ml-4'>
            <Text className="text-white text-xl flex-row font-main_medium">
              {name}
            </Text>
            <Text className="text-blue-200 text-xl flex-row font-main">
              {loginName}
            </Text>
          </View>
          <View>
              <View className='flex-row mt-2 ml-6 space-x-2 opacity-30'>
                <View id='wallet' className='space-x-2 flex-row bg-black rounded-sm border border-gray-400'>
                  <Text className="text-white text-opacity-100 text-xl py-2 pl-4 flex-row font-main_medium">
                  {walletBalance} ₳
                  </Text>
                  <Text className="text-white text-opacity-100 text-lg py-2 px-6 flex-row font-main_medium">
                    Wallet
                  </Text>
                </View>
                <View id='evalpoints' className='space-x-2 flex-row bg-black rounded-sm border border-gray-400'>
                  <Text className="text-white text-opacity-100 text-xl py-2 pl-4 flex-row font-main_medium">
                    {loading ? '...' : points}
                  </Text>
                  <Text className="text-white text-opacity-100 text-lg py-2 px-4 flex-row font-main_medium">
                    Eval. Points
                  </Text>
                </View>
              </View>
              <View>
                <View className="ml-6 mr-6 mt-3">
                  <View className="flex-row items-center">
                    <Text className="text-gray-300 tracking-widest font-main_medium text-xs mb-1 mr-2">
                      LEVEL PROGRESS
                    </Text>
                  </View>
                  <View className="flex-row items-center bg-gray-200 h-2 rounded-lg">
                    <View className="bg-blue-500 h-2 rounded-lg" style={{ width: `${(progress / nextLevel) * 100}%` }}>
                    </View>
                  </View>
                  <View className="flex-row justify-between mt-2">
                    <Text className="text-xs text-gray-200">Level {currentLevel}</Text>
                    <Text className="text-xs text-gray-500">Level {nextLevel}</Text>
                  </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView className='bg-zinc-900'>
        <View>
          <View id='upcoming-box' className='flex-row bg-zinc-800 h-1/2 w-1/2'>

          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0">
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

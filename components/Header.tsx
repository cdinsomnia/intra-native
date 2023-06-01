import React, { useEffect, useState } from 'react';
import { View, Image, Alert, Text, TouchableOpacity } from 'react-native';
import SvgComponent from './logo';
import * as Icons from 'react-native-heroicons/outline';
import { getAccessToken } from './api/api_token';
import { useAuthorization } from '../components/api/api_connection';
import { useNavigation } from '@react-navigation/native';
import { config } from '../components/api/api_config';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const Header = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [available, setAvailability] = useState();
  const accessToken = getAccessToken();
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.intra.42.fr/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const profileUrl = data.image?.link;
        setProfileImage(profileUrl);
        const availablitiyStatus = data.location;
        setAvailability(availablitiyStatus);
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen des Profilbildes:', error);
      });
  }, []);

  const handleLogout = () => {
    endAsyncEvent;
    navigation.navigate('Auth');
  };

  if (available)
  {
    return (
      <View className="bg-neutral-900 flex-row items-center justify-between p-6 mt-6">
        <SvgComponent />
        <View className="flex-row items-center justify-between">
          <View className="flex-row mb-1">
            <Text></Text>
            <Icons.BellIcon color="white" />
          </View>
          <TouchableOpacity onPress={handleLogout} className="flex-row ml-6 rounded-full p-1 bg-gray-950 border-2 border-emerald-400">
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <View className="w-12 h-12 rounded-full bg-gray-500" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (!available)
  {
    return (
      <View className="bg-neutral-900 flex-row items-center justify-between p-6 mt-6">
        <SvgComponent />
        <View className="flex-row items-center justify-between">
          <View className="flex-row mb-1">
            <Text></Text>
            <Icons.BellIcon color="white" />
          </View>
          <TouchableOpacity onPress={handleLogout} className="flex-row ml-6 rounded-full p-1 bg-gray-950 border-2 border-gray-400">
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <View className="w-12 h-12 rounded-full bg-gray-500" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

};

export default Header;

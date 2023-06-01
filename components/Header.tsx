import React, { useEffect, useState } from 'react';
import { View, Image, Alert, Text, TouchableOpacity } from 'react-native';
import SvgComponent from './logo';
import * as Icons from 'react-native-heroicons/outline';
import { getAccessToken } from './api/api_token';

const Header = () => {
  const [profileImage, setProfileImage] = useState(null);
  const accessToken = getAccessToken();

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
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen des Profilbildes:', error);
      });
  }, []);

  const handleProfileInteraction = () => {
    Alert.alert('Notice', 'There is no implementation yet.')
  }

  return (
    <View className="bg-neutral-900 flex-row items-center justify-between p-6 mt-6">
      <SvgComponent />
      <View className="flex-row items-center justify-between">
        <View className="flex-row mb-1">
          <Text></Text>
          <Icons.BellIcon color="white" />
        </View>
        <TouchableOpacity onPress={handleProfileInteraction} className="flex-row ml-6 rounded-full p-1 bg-gray-950 border-2 border-emerald-400">
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
};

export default Header;

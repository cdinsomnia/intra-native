import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import BTN_Nav_Home from '../components/buttons/BTN_Nav_Home';
import BTN_Nav_Projects from '../components/buttons/BTN_Nav_Projects';
import BTN_Nav_Evals from '../components/buttons/BTN_Nav_Evals';
import BTN_Nav_Search from '../components/buttons/BTN_Nav_Search';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="fixed bottom-0 left-0 right-0 bg-neutral-800 flex-row justify-between items-center py-2 px-4">
      <View className="flex-1 items-center">
        <BTN_Nav_Home title="HOME" onPress={() => navigation.navigate('Home')} />
      </View>
      <View className="flex-1 items-center">
        <BTN_Nav_Projects title="PROJECTS" onPress={() => navigation.navigate('Projects')} />
      </View>
      <View className="flex-1 items-center">
        <BTN_Nav_Evals title="EVALUATE" onPress={() => navigation.navigate('Evaluations')} />
      </View>
      <View className="flex-1 items-center">
        <BTN_Nav_Search title="SEARCH" onPress={() => navigation.navigate('Search')} />
      </View>
    </View>
  );
};

export default BottomNavigation;

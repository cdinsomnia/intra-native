import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import BTN_Nav_Home from './buttons/BottomNavigation_Home';
import BTN_Nav_Projects from './buttons/ButtomNavigation_Projects';
import BTN_Nav_Evals from './buttons/ButtomNavigation_Evaluations';
import BTN_Nav_Search from './buttons/ButtomNavigation_Search';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="fixed bottom-0 left-0 right-0 bg-neutral-800 border-t-stone-700 border flex-row justify-between items-center pt-2 px-4">
      <View className="flex-1 items-center">
        <BTN_Nav_Home title="HOME" onPress={() => navigation.navigate('Home')} />
      </View>
      <View className="flex-1 items-center">
        <BTN_Nav_Projects title="PROJECTS" onPress={() => navigation.navigate('Projects')} />
      </View>
      <View className="flex-1 items-center space-x-0">
        <BTN_Nav_Evals title="EVALUATIONS" onPress={() => navigation.navigate('Evaluations')} />
      </View>
      <View className="flex-1 items-center">
        <BTN_Nav_Search title="SEARCH" onPress={() => navigation.navigate('Search')} />
      </View>
    </View>
  );
};

export default BottomNavigation;

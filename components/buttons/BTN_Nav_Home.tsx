import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Icons from "react-native-heroicons/outline";
import { Screen, ScreenStack } from 'react-native-screens';
import HomeScreen from '../../screens/Home';

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const BTN_Nav_Home = ({onPress, title}) => {

    if(HomeScreen) {
        return (
            <TouchableOpacity onPress={onPress} className="items-center flex-col bg-neutral-900 active:bg-gray-900 rounded-lg p-2">
              <Icons.HomeIcon color="white"/>
                <Text className="text-white mt-2 font-main_medium text-xs tracking-wider">{title}</Text>
            </TouchableOpacity>
        )
    }
    if(!HomeScreen) {
        return (
            <TouchableOpacity onPress={onPress} className="items-center flex-col active:bg-gray-700 rounded-sm p-2">
              <Icons.HomeIcon color="white"/>
                <Text className="text-gray-300 mt-2 font-main_medium text-xs tracking-wider">{title}</Text>
                <View className='h-0.5 w-full bg-gray-500'></View>
            </TouchableOpacity>
        )
    }
}

export default BTN_Nav_Home
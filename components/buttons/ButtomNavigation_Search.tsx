import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Icons from "react-native-heroicons/outline";

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const BTN_Nav_Search = ({onPress, title}) => {
    const navigation = useNavigation();
    const navigationState = useNavigationState(state => state)

    const currentScreen = navigationState.routes[navigationState.index].name;
    const isSearchScreen = currentScreen === "Search";

    if (isSearchScreen) {
        return (
            <TouchableOpacity onPress={onPress} className="w-full items-center space-y-1.5">
                <Icons.MagnifyingGlassIcon color="white"/>
                <Text className="text-white text-xs font-main_semibold">{title}</Text>
                <View className='bg-teal-400 h-0.5 w-8/12'></View>
            </TouchableOpacity>
        )
    }

    if (!isSearchScreen) {
        return (
            <TouchableOpacity onPress={onPress} className="w-full items-center space-y-1.5">
                <Icons.MagnifyingGlassIcon color="white"/>
                <Text className="text-gray-300 text-xs font-main_semibold">{title}</Text>
                <View className='bg-gray-400 h-0.5 w-3'></View>
            </TouchableOpacity>
        )
    }
}

export default BTN_Nav_Search
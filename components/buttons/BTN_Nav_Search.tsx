import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Icons from "react-native-heroicons/outline";

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const BTN_Nav_Search = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} className="items-center flex-col active:bg-gray-900 rounded-lg p-2">
            <Icons.MagnifyingGlassIcon color="white"/>
            <Text className="text-gray-300 mt-2 font-main_medium text-xs tracking-wider">{title}</Text>
            <View className='h-0.5 w-full bg-gray-500'></View>
        </TouchableOpacity>
    )
}

export default BTN_Nav_Search
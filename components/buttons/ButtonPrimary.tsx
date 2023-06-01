import * as React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const ButtonPrimary = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} className="animate-fade-in-down focus:outline-none focus:ring-4 font-main_semibold rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-zinc-400 text-black border-zinc-600 border-2 hover:bg-emerald-800 hover:border-emerald-500 dark:focus:ring-emerald-700 p-5">
            <Text className="text-xl text-black font-main_semibold mt-1">{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary
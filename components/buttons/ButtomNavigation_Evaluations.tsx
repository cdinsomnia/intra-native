import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Icons from "react-native-heroicons/outline";

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const BN_Evaluations = ({onPress, title}) => {

    const navigation = useNavigation();
    const navigationState = useNavigationState(state => state)
    const currentScreen = navigationState.routes[navigationState.index].name;
    const isEvalScreen = currentScreen === "Evaluations";

    if (isEvalScreen) {
        return (
            <TouchableOpacity onPress={onPress} className="w-full items-center space-y-1.5">
                    <Icons.ArrowsRightLeftIcon color="white"/>
                    <Text className="text-white text-xs font-main_semibold">{title}</Text>
                    <View className='bg-teal-400 h-0.5 w-20'></View>
            </TouchableOpacity>
        )
    }

    if (!isEvalScreen) {
        return (
            <TouchableOpacity onPress={onPress} className="w-full items-center space-y-1.5">
                    <Icons.ArrowsRightLeftIcon color="white"/>
                    <Text className="text-gray-300 text-xs font-main_semibold">{title}</Text>
                    <View className='bg-gray-400 h-0.5 w-3'></View>
            </TouchableOpacity>
        )
    }
}

export default BN_Evaluations
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const ButtonPrimarySmall = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} className="p-3 flex-row justify-end animate-fade-in-down focus:outline-none focus:ring-2 font-main_medium rounded-full mr-2 bg-emerald-400 text-black border-emerald-300 border-2 hover:bg-emerald-800 hover:border-emerald-500 dark:focus:ring-emerald-700">
            <Text className="text-base text-black font-main_semibold">{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimarySmall
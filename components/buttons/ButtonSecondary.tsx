import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator()

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
const ButtonSecondary = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} className="p-3 flex-row justify-end focus:outline-none focus:ring-2 hover:bg-emerald-800 hover:border-emerald-500 dark:focus:ring-emerald-700">
            <Text className="text-xs text-gray-200 font-main_semibold">{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSecondary
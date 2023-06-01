import { View, Text } from 'react-native'
import React from 'react'
import ButtonFun from '../components/buttons/ButtonFun'

function handlePress() {
  console.log('E');
}

const SearchScreen = () => {
  return (
    <View className='flex-row space-y-2'>
      <ButtonFun title="E" onPress={handlePress} />
    </View>
  )
}

export default SearchScreen
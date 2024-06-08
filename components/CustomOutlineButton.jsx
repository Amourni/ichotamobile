import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'

const CustomOutlineButton = ({ title, handlePress, containerStyles, textStyles, iconSource, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-3xl min-h-[42px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {iconSource && <Image source={iconSource} style={{ width: 20, height: 20, marginRight: 8, tintColor: '#C69857' }} resizeMode="contain" />}
        <Text className={`text-gold-100 font-regular text-lg ${textStyles}`}>
            {title}
        </Text>
    </View>
    </TouchableOpacity>
  )
}

export default CustomOutlineButton
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, isDateField, ...props }) => {

const [showPassword, setShowPassword] = useState(false)


//Conditional rendering fot Input. Whenever the input field is a datepicker it adds a TouchableOpacity
//where the button can be clicked and a modal opens up using the "isDateField" prop
if (isDateField) {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>

      <TouchableOpacity onPress={handleChangeText}>
        <View className="border border-gray-400 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-gold-100 items-center flex-row">
          <Text className="flex-1 text-white font-semibold text-base">
            {value || placeholder}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>

      <View className="border border-gray-400 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-gold-100 items-center flex-row">
        <TextInput 
          className="flex-1 text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain'/>
          </TouchableOpacity>


        )}
      </View>
    </View>
  )
}
 
export default FormField
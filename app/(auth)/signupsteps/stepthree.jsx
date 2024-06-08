import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';
import CountryPicker from '@theankur/react-native-country-picker-modal'


import { images, icons } from '../../../constants';
import FormField from '../../../components/FormField';

import CustomButton from '../../../components/CustomButton';

const StepThree = () => {

  const [form, setForm] = useState({ firstname: '', lastname: '', othernames: '' })
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: 'US', name: 'United States' });// State to hold selected country
  const [withCountryNameButton, setWithCountryNameButton] = useState(false)

  const [isSubmiting, setIsSubmitting] = useState(false)

  const handleCountrySelect = (selectedCountry) => {
    setSelectedCountry({ code: selectedCountry.cca2, name: selectedCountry.name });
    setCountryPickerVisible(false);
  }
  
  const handleNext = () => {
    const { firstname, lastname, othernames } = form
    router.push({
      pathname: '/signupsteps/stepthree',
      params: { firstname, lastname, othernames }
    })
  }





  return (
  <>
    <StatusBar style="dark" backgroundColor="black"/>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={icons.leftcircle} style={{ width: 20, height: 20, marginRight: 8 }} tintColor="#fff" resizeMode="contain" />
          <Image source={images.ichotalogo2} style={{ width: 62, height: 20 }} resizeMode="contain" />
        </View>

        <View style={{ flex: 1, paddingTop: 10 }}>
          <Text 
              className="text-md text-white pt-10 font-regular uppercase text-left">
              Section 1- <Text className="font-extrabold">Personal Details</Text>
          </Text>
        
        {/* Country Picker */}
        <View style={{ marginTop: 20 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">Country of Origin</Text>

            <TouchableOpacity onPress={() => setCountryPickerVisible(true)}>
            <FormField 
                value={selectedCountry.name}
                onValueChange={setWithCountryNameButton}
                otherStyles="mt-7"
                placeholder="e.g Canada"
                editable={false}
            />
            </TouchableOpacity>

              <View style={{ flexDirection: 'row', alignItems: 'center', textAlign: 'left'}}>
              {countryPickerVisible && (
                <CountryPicker
                    countryCode={selectedCountry.code}
                    withFilter
                    withFlag
                    withCountryNameButton
                    withAlphaFilter
                    withCallingCode
                    withEmoji
                    onSelect={handleCountrySelect}
                />
              )}
            </View>
        </View>
    
          <CustomButton
            title="Next"
            handlePress={handleNext}
            containerStyles="mt-10"
            isLoading={isSubmiting}
            iconSource={icons.rightArrow}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  )
}


export default StepThree
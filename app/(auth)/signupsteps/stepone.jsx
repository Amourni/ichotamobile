import { View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';

import { images, icons } from '../../../constants';
import FormField from '../../../components/FormField';

import CustomButton from '../../../components/CustomButton';

const StepOne = () => {

  const [form, setForm] = useState({ firstname: '', lastname: '', othernames: '' })
  const [isSubmiting, setIsSubmitting] = useState(false)
  
  const handleNext = () => {
    const { firstname, lastname, othernames } = form
    router.push({
      pathname: '/signupsteps/steptwo',
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

        <Text 
            className="text-md text-white pt-10 font-regular uppercase text-left">
            Section 1- <Text className="font-extrabold">Personal Details</Text>
        </Text>

        <FormField 
          title={
            <Text>
                First Name<Text style={{ color: 'red' }}>*</Text>
            </Text>
          }
          value={form.firstname}
          handleChangeText={(e) => setForm({...form, firstname: e })}
          otherStyles="mt-7"
          placeholder="e.g John"
        />

        <FormField 
          title={
            <Text>
              Last Name<Text style={{ color: 'red' }}>*</Text>
            </Text>
          }
          value={form.lastname}
          handleChangeText={(e) => setForm({...form, lastname: e })}
          otherStyles="mt-7"
          placeholder="e.g Doe"
        />

        <FormField 
          title={
            <Text>
              Other Names or Alias<Text style={{ color: 'red' }}>*</Text>
            </Text>
          }
          value={form.othernames}
          handleChangeText={(e) => setForm({...form, othernames: e })}
          otherStyles="mt-7"
          placeholder="Fill in any other name you go by or gone by"
        />


        <CustomButton
          title="Next"
          handlePress={handleNext}
          containerStyles="mt-10"
          isLoading={isSubmiting}
          iconSource={icons.rightArrow}
        />

      </ScrollView>
    </SafeAreaView>
    </>
  )
}


export default StepOne
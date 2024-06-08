import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';

import { images, icons } from '../../constants';
import FormField from '../../components/FormField';

import CustomButton from '../../components/CustomButton';

const SignIn = () => {

  const [form, setForm] = useState({ email: '', password: '' })
  const [isSubmiting, setIsSubmitting] = useState(false)
  
  const submit = () => {

  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ padding: 10, paddingTop: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={icons.leftcircle} style={{ width: 20, height: 20, marginRight: 8 }} tintColor="#fff" resizeMode="contain" />
          <Image source={images.ichotalogo2} style={{ width: 62, height: 20 }} resizeMode="contain" />
        </View>

        {/* <Text className="text-md text-white text-semibold pt-10 font-semibold uppercase text-left">Section 1- <Text className="font-extrabold">Bio Data</Text></Text> */}

        <Text className="text-lg text-white text-semibold pt-5 text-left">We're stoked to have you in our cosmic party!</Text>

        <FormField 
          title="Email*"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />

        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e })}
          otherStyles="mt-7"
        />

        <View style={{ borderBottomColor: '#292727', borderBottomWidth: 1, marginTop: 80 }} />
          <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 20, color: 'white' }}>or Social Signup</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 15 }}>
            <Image source={icons.google} style={{ width: 32, height: 32, marginRight: 30 }} />
            <Image source={icons.linkedin} style={{ width: 32, height: 32 }} />
          </View>

        <CustomButton
          title="Next"
          //handlePress={submit} (Behaviour to handle submit login request)
          handlePress={() => router.push('/login-ready')}
          containerStyles="mt-10"
          isLoading={isSubmiting}
          iconSource={icons.rightArrow}
        />

      </ScrollView>
    </SafeAreaView>

  )
}

export default SignIn
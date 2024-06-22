import { View, Text, ScrollView, Image, Modal, Button, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../../constants';


const completeBasicSignUp= () => {

  return (
  <>
    <StatusBar style="dark" backgroundColor="black"/>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={icons.ichotacheck} style={{ width: 120, height: 138 }} resizeMode="contain" />
          <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'white' }}>Woohoo! You conquered the basic sign-up mountain!</Text>
        </View>

        <View style={{ marginBottom: 16 }}>
          <CustomButton 
            title="Next"
            handlePress={() => router.push('/sign-in')}
            iconSource={icons.rightArrow}
            containerStyles="w-full self-end mb-4"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
    </>
  )
}


export default completeBasicSignUp
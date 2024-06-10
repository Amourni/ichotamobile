import { View, Text } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router'; 
import { StatusBar } from 'expo-status-bar';

const SignUpStepLayout = () => {
  return (
   <>
      <StatusBar style="light" backgroundColor="black" translucent={false}/>
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="onboarding"
            options={{
              headerShown: false
            }}
          />
      </Stack>
   
   </>
  )
}

export default SignUpStepLayout
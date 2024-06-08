import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';


SplashScreen.preventAutoHideAsync();

const RootLayout  = () => {

  const [fontsLoaded, error] = useFonts({
    "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
    "Sora-Light": require("../assets/fonts/Sora-Light.ttf"),
    "Sora-Bold": require("../assets/fonts/Sora-Bold.ttf"),
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync(); 
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null

  return (
    <>
        <Slot />
    </>
  )
}

export default RootLayout 

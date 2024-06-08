import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, ImageBackground } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images, icons } from '../../constants';
import CustomButton from '../../components/CustomButton';
import CustomOutlineButton from '../../components/CustomOutlineButton';

const LoginReady = () => {
  return (
    <>
    <StatusBar style="dark" backgroundColor="black"/>
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={images.splashscreen}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'space-between' }}
          >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={images.ichotalogo2} style={{ width: 138, height: 44, resizeMode: 'contain'}} resizeMode="contain" />
              <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'white' }}>Ready to start your exclusive adventure?</Text>
            </View>

            <View style={{ marginBottom: 16 }}>
              <CustomButton 
                title="Let's go!"
                handlePress={() => router.push('/signupsteps/stepone')}
                iconSource={icons.rightArrow}
                containerStyles="w-full self-end mb-4"
              />
              
              <CustomOutlineButton 
                title="Access Trial"
                handlePress={() => router.push('/sign-in')}
                iconSource={icons.rightArrow}
                containerStyles="bg-transparent border-gold-100 border-2"
              />
            </View>
            
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
      </>
  )
}

export default LoginReady
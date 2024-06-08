import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Text, ImageBackground } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images, icons } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <>
    <StatusBar style="light" backgroundColor="black" translucent={false}/>
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={images.splashscreen}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'space-between' }}
          >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={images.ichotalogo} style={{ width: 120, height: 138 }} resizeMode="contain" />
            </View>

            <View style={{ marginBottom: 16 }}>
              <CustomButton 
                title="Apply to Join"
                handlePress={() => router.push('/sign-in')}
                iconSource={icons.rightArrow}
                containerStyles="w-full self-end mb-4"
              />
              
              <View style={{ flexDirection: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                <Image source={icons.rightArrow} style={{ width: 20, height: 20, marginRight: 8 }} tintColor="#C69857" resizeMode="contain" />
                <Text className="text-lg font-regular text-gold-100">
                  I am a Member
                </Text>
              </View>
            </View>
            
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
      </>
  );
}


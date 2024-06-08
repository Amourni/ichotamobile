import { View, Text, ScrollView, Image, Modal, Button, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButton from '../../../components/RadioButton'; 


import { images, icons } from '../../../constants';
import FormField from '../../../components/FormField';

import CustomButton from '../../../components/CustomButton';

const StepTwo = () => {

  const [form, setForm] = useState({ firstname: '', lastname: '', othernames: '' })
  const [date, setDate] = useState(new Date()); //to set date
  const [showPicker, setShowPicker] = useState(false); //show date modal onpress of formfield
  const [selectedGender, setSelectedGender] = useState('male'); 
  const [differentGender, setDifferentGender] = useState('no'); 
  const [previousGender, setPreviousGender] = useState('');

  const [isSubmiting, setIsSubmitting] = useState(false)

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formattedDate = date.toLocaleDateString();
  
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

          <FormField 
            title={
              <Text>
                  Date of Birth<Text style={{ color: 'red' }}>*</Text>
              </Text>
            }
            value={formattedDate}
            handleChangeText={() => setShowPicker(true)}
            otherStyles="mt-7"
            placeholder="select DD/MM/YYYY"
            isDateField={true}
          />

          {showPicker && (
          <Modal
              transparent={true}
              animationType="slide"
              visible={showPicker}
              onRequestClose={() => setShowPicker(false)}
          >
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C69857', opacity: 0.9 }}>
                  <DateTimePicker
                      value={date}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                  />
                  <Button title="Close" onPress={() => setShowPicker(false)} />
              </View>
          </Modal>
          )}

          {/* what is your gender */}
            <View style={{ marginTop: 20 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">What is your Gender?</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <RadioButton
                  selected={selectedGender === 'male'}
                  onPress={() => setSelectedGender('male')}
                  label="Male"
                />
                <RadioButton
                  selected={selectedGender === 'female'}
                  onPress={() => setSelectedGender('female')}
                  label="Female"
                />
              </View>
            </View>

          {/* Ever been a different gender */}
            <View style={{ marginTop: 20 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">Ever been a different Gender?</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <RadioButton
                  selected={differentGender === 'yes'}
                  onPress={() => setDifferentGender('yes')}
                  label="Yes"
                />
                <RadioButton
                  selected={differentGender === 'no'}
                  onPress={() => setDifferentGender('no')}
                  label="No"
                />
              </View>
            </View>

          {/* select different gender */}
            <View style={{ marginTop: 20 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">If Yes, select previous Gender</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <RadioButton
                  selected={previousGender === 'male'}
                  onPress={() => setPreviousGender('male')}
                  label="Male"
                />
                <RadioButton
                  selected={previousGender === 'female'}
                  onPress={() => setPreviousGender('female')}
                  label="Female"
                />
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


export default StepTwo
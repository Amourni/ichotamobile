import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Button, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButton from '../../../components/RadioButton'; 
import CustomButton from '../../../components/CustomButton';
import { memberQuestions } from '../../../preload/questions.seed';
import FormField from '../../../components/FormField';
import IchDropdown from '../../../components/IchDropdown';
import { icons, images } from '../../../constants';
import getCountries from '../../../api/CountryService';

const StepOne = ({ router }) => {

  const initialFormState = {
    '5': 'male', // Default selected value for the gender question
    '6': 'yes',
  };


 

  const [form, setForm] = useState(initialFormState);
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const [showPicker, setShowPicker] = useState(false); // State for showing date picker
  const [date, setDate] = useState(new Date()); // State for selected date
  const [value, setValue] = useState(null);
  const [countries, setCountries] = useState([]);
  const [yearslist, setYearsList] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        // Transform data to include label and value fields

        const transformedCountries = data.map(country => ({
          label: country.name,
          value: country.code
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

        const transformedCurrencies = data.flatMap(country => country.currencies)
          .filter((currency, index, self) => 
            index === self.findIndex(c => c.code === currency.code)
          )
          .map(currency => ({
            label: `${currency.name} (${currency.symbol})`,
            value: currency.code
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountries(transformedCountries);
        setCurrencies(transformedCurrencies);

      } catch (error) {
        console.error(error);
      } 
    };

    const generateYears = () => {
      const currentYear = new Date().getFullYear();
      const yearOptions = [];
      for (let year = currentYear; year >= 1900; year--) {
        yearOptions.push({ label: `${year}`, value: `${year}` });
      }
      setYearsList(yearOptions);
    };

    fetchCountries(); 
    generateYears(); 
  }, []);
  


  // Function to handle input change and update form state
  const handleChange = (fieldName, value) => {
    setForm(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  // Function to handle date change
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
    handleChange('4', currentDate); // Assuming '4' is the ID for the Date of Birth question
  };

  const formattedDate = date.toLocaleDateString();

  // Function to render form fields based on the current page
  const renderFormFields = () => {
    // Filter questions for the current page
    const currentQuestions = memberQuestions.filter(
      (question) => question.page === currentPage
    );

    return currentQuestions.map((question, index) => {
      let formFieldComponent = null;

      switch (question.displayType) {
        case 'text':
          formFieldComponent = (
            <FormField
              key={index}
              title={
                <Text>
                  {question.question}
                  {question.required && (
                    <Text style={{ color: 'red' }}>*</Text>
                  )}
                </Text>
              }
              value={form[question.id]}
              handleChangeText={(value) => handleChange(question.id, value)}
              otherStyles="mt-7"
              placeholder={question.placeholder || ''}
            />
          );
          break;

        case 'date':
          formFieldComponent = (
            <FormField
            key={index}
            title={
              <Text>
                {question.question}
                {question.required && (
                  <Text style={{ color: 'red' }}>*</Text>
                )}
              </Text>
            }
            value={formattedDate}
            handleChangeText={() => setShowPicker(true)}
            otherStyles="mt-7"
            placeholder="select DD/MM/YYYY"
            isDateField={true}
          />
        );
          break;

        case 'radio-single':
          const isTwoColumnLayout = question.options.length > 4;
            formFieldComponent = (
              <View key={index} style={{ marginTop: 10 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">{question.question}</Text>
              <View style={{ flexDirection: isTwoColumnLayout ? 'row' : 'column', flexWrap: 'wrap' }}>
                {question.options.map((option, idx) => (
                  <View key={idx} style={{ flexBasis: isTwoColumnLayout ? '50%' : '100%', paddingRight: 15 }}>
                    <RadioButton
                      key={idx}
                      selected={form[question.id] === option.value}
                      onPress={() => handleChange(question.id, option.value)}
                      label={option.label}
                    />
                    </View>
                ))}
              </View>
            </View>
        );
          break;

          case 'text-select':
            formFieldComponent = (
              <View key={index} style={{ marginTop: 10 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">{question.question}</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <IchDropdown
                  data={countries}
                  value={form[question.id]}
                  onChange={(item) => handleChange(question.id, item.value)}
                />
              </View>
            </View>
        );

        break;

        case 'select':
          formFieldComponent = (
            <View key={index} style={{ marginTop: 20 }}>
            <Text className="text-base text-gray-100 font-medium pb-2">{question.question}</Text>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <IchDropdown
              data={question.options}
              value={form[question.id]}
              onChange={(item) => handleChange(question.id, item.value)}
            />
            </View>
          </View>
        );
        break;

        case 'years':
          formFieldComponent = (
            <View key={index} style={{ marginTop: 20 }}>
            <Text className="text-base text-gray-100 font-medium pb-2">{question.question}</Text>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <IchDropdown
              data={yearslist}
              value={form[question.id]}
              onChange={(item) => handleChange(question.id, item.value)}
            />
            </View>
          </View>
        );
        break;

        case 'currency':
          formFieldComponent = (
            <View key={index} style={{ marginTop: 20 }}>
              <Text className="text-base text-gray-100 font-medium pb-2">{question.question}</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <IchDropdown
                  data={currencies}
                  value={form[question.id]}
                  onChange={(item) => handleChange(question.id, item.value)}
                />
              </View>
            </View>
          );

        default:
          break;
      }

      return (
        <View key={index} style={{ marginTop: 5 }}>
        {index === 0 && (
          <Text className="text-md font-bold text-white pt-10 font-regular uppercase text-left">
            {question.section}
          </Text>
        )}
        {formFieldComponent}
      </View>
      );
    });
  };

  // Function to handle next button click
  const handleNext = () => {
    // Increment the current page number
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <StatusBar style="dark" backgroundColor="black" />
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={icons.leftcircle} style={{ width: 20, height: 20, marginRight: 8 }} tintColor="#fff" resizeMode="contain" />
            <Image source={images.ichotalogo2} style={{ width: 62, height: 20 }} resizeMode="contain" />
          </View>

          {/* Render form fields */}
          {renderFormFields()}

          <CustomButton
            title="Next"
            handlePress={handleNext}
            containerStyles="mt-10"
          />
        </ScrollView>

        {/* Date picker modal */}
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
      </SafeAreaView>
    </>
  );
};

export default StepOne;

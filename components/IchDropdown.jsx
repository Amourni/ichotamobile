import { View, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';

const IchDropdown = ({ data, value, onChange }) => {

  const defaultValue = value || (data && data.length > 0 ? data[0].value : '');

  return (
    <Dropdown
        className="border border-gray-400 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-gold-100 items-center"
        placeholderStyle
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle
        iconStyle
        data={data || []}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select country"
        searchPlaceholder="Search..."
        value={defaultValue}
        onChange={onChange}
        backgroundColor={styles.background}
      />
  )
}

export default IchDropdown;


const styles = StyleSheet.create({
    selectedTextStyle: {
      fontSize: 16,
      color: '#CDCDE0',
      fontWeight: 500
    },
  });
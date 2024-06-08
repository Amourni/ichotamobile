import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const RadioButton = ({ selected, onPress, label }) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
    <View style={{
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: selected ? '#fff' : '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10
    }}>
      {selected && (
        <View 
            style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
            }} 
        />
        )}
        </View>
    <Text style={{ color: '#fff' }}>{label}</Text>
  </TouchableOpacity>
);

export default RadioButton;

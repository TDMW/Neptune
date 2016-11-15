import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor='white'
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
        />
    </View>
  );
};

const styles = {
    inputStyle: {
      color: 'white',
      paddingRight: 5,
      paddingLeft: 50,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
};

export { Input };

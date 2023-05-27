/* eslint-disable react-native/no-inline-styles */
import {TextInput, TextInputProps} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';

export const Input: React.FC<TextInputProps> = ({...otherProps}) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.gray}
      style={[
        {
          fontSize: FontSize.small,
          padding: Spacing * 2,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: {width: 4, height: Spacing},
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};

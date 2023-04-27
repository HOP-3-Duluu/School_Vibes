import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
  onPress: () => void;
  icon?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
  variant?: 'contained' | 'outlined';
}

export const Button: React.FC<Props> = ({
  onPress,
  children,
  icon,
  buttonStyle,
  textStyle,
  variant,
}) => {
  const textColor = variant === 'contained' ? '#fff' : Colors.primary;
  const borderColor = variant === 'outlined' ? Colors.primary : 'transparent';
  const backgroundColor =
    variant === 'contained' ? Colors.primary : 'transparent';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        buttonStyle,
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ]}>
      <View style={styles.container}>
        {icon}
        <Text style={[styles.text, textStyle, {color: textColor}]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'stretch',
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10,
  },
});

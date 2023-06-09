/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useTheme} from '@react-navigation/native';
import Artwork03 from '../assets/images/ArtWork';
import {Button, Font, Input, Margin} from '../components';
import Colors from '../constants/Colors';
import {Email, Password} from '../assets';
import {Alert} from 'react-native';
import {instance} from '../library';
import {useAuth} from '../providers';

export const Login = () => {
  const theme = useTheme();
  const {setUser} = useAuth();
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [value, setValue] = useState({
    gmail: '',
    password: '',
  });
  const LoginRouter = async () => {
    try {
      if (!value.gmail || !value.password)
        return Alert.alert('Та нэр болон нууц үгээ бөглөнө үү.');
      const {data} = await instance.post('/login', value);
      setUser(data.message[0]);
      navigation.navigate('General');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <SafeAreaView
        style={[
          styles.safeArea,
          {backgroundColor: theme.colors.card, minHeight: dimensions.height},
        ]}>
        <View style={styles.centerContainer}>
          <Artwork03 width={240} height={dimensions.height / 3} />
        </View>

        <View style={styles.contentContainer}>
          <Font fontSize={40} fontWeight="800" color={Colors.primary}>
            Let's{'\n'}Get Started
          </Font>
          <Margin top={16}>
            <Font fontSize={16} color={Colors.primary} style={{opacity: 0.5}}>
              To register for an account, kindly enter your details
            </Font>
          </Margin>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Input
                placeholder="Your Email"
                style={[
                  styles.input,
                  {backgroundColor: theme.colors.background},
                ]}
                value={value.gmail}
                onChangeText={text => setValue({...value, gmail: text})}
              />
              <Email style={styles.inputIcon} />
            </View>
            <View style={styles.inputWrapper}>
              <Input
                placeholder="Your Password"
                style={[
                  styles.input,
                  {backgroundColor: theme.colors.background},
                ]}
                value={value.password}
                onChangeText={text => setValue({...value, password: text})}
              />
              <Password style={styles.inputIcon} />
            </View>
            <Button
              onPress={LoginRouter}
              variant="outlined"
              buttonStyle={styles.button}
              textStyle={styles.buttonText}>
              Log In
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 24,
  },

  inputContainer: {
    alignItems: 'center',
    marginTop: 32,
    gap: 16,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 48,
    paddingRight: 12,
    height: 48,
    borderRadius: 12,
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    opacity: 0.5,
  },
  button: {
    borderRadius: 12,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

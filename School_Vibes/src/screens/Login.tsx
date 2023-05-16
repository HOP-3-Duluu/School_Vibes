import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {RootStackScreenProps} from '../interfaces';
import Artwork03 from '../assets/images/ArtWork';
import {Button, Input} from '../components';
import Colors from '../constants/Colors';
import {Email, Password} from '../assets';

export const Login = ({navigation}: RootStackScreenProps<'General'>) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <SafeAreaView
        style={[
          styles.safeArea,
          {backgroundColor: theme.colors.card, minHeight: dimensions.height},
        ]}>
        <View style={styles.centerContainer}>
          <Artwork03 width={240} height={240} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Let's{'\n'}Get Started</Text>
          <Text style={styles.subtitle}>
            To register for an account, kindly enter your details
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Input
                placeholder="Your Email"
                style={[
                  styles.input,
                  {backgroundColor: theme.colors.background},
                ]}
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
              />
              <Password style={styles.inputIcon} />
            </View>
            <Button
              onPress={() => navigation.navigate('General')}
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
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Colors.primary,
  },
  subtitle: {
    opacity: 0.5,
    marginTop: 16,
    fontSize: 16,
    color: Colors.primary,
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

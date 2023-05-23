import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Notification} from '../assets';
import Logo from '../assets/images/Logo.png';
import {Font, Stack} from '../components';
import Colors from '../constants/Colors';

const Item = ({icon, text, router}) => {
  return (
    <TouchableOpacity>
      <View>
        <Font>{text}</Font>
      </View>
    </TouchableOpacity>
  );
};

const CircleImage = () => {
  return (
    <View style={styles.border}>
      <Image
        source={{
          uri: 'https://www.shutterstock.com/image-photo/headshot-portrait-happy-african-american-260nw-1783761902.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
};

export const Profile = () => {
  return (
    <Stack alignItems="center">
      <SafeAreaView>
        <Stack direction="row" justifyContent="space-between">
          <Image source={Logo} style={{width: 100, height: 40}} />
          <Notification />
        </Stack>
        <Stack>
          <CircleImage />
          <Font>Image</Font>
          <Font>name</Font>
          <Font>phone</Font>
        </Stack>
        <Stack>
          <Item text={'Membership'} router="Membership" icon={''} />
          <Font>contact us</Font>
          <Font>policy</Font>
          <Font>terms</Font>
          <Font>logout</Font>
          <Font>Create or join participate</Font>
        </Stack>
      </SafeAreaView>
    </Stack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
  },
  border: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: 'dashed',
    padding: 5,
    borderColor: Colors.primary,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

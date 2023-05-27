import React, {useEffect, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Notification, Phone, Logout, Logo, TermsCond} from '../assets';

import {useNavigation} from '@react-navigation/native';

import {Font, Stack, Margin, Padding} from '../components';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import PrivacyPolicy from '../assets/icon/PrivacyPolicy';

interface ItemProps {
  icon: any;
  text: string;
  router?: string;
  border?: boolean;
}

const Item = ({icon, text, router, border = true}: ItemProps) => {
  return (
    <TouchableOpacity>
      <Stack
        alignItems="center"
        direction="row"
        style={border ? styles.Options : styles.NoBorder}>
        <Margin right={15} left={-15}>
          {icon}
        </Margin>
        <Font fontSize={FontSize.large} fontWeight="300">
          {text}
        </Font>
      </Stack>
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
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack alignItems="center" direction="column" style={{width: '100%'}}>
        <SafeAreaView>
          <Margin top={30}>
            <Stack
              direction="row"
              justifyContent="space-between"
              style={styles.contain}>
              {/* <Image source={Logo} style={{width: 100, height: 40}} /> */}
              <Logo width={40} height={40} />
              <TouchableOpacity
                onPress={() => navigation.push('Notifications')}>
                <Notification width={40} height={40} fill={Colors.primary} />
              </TouchableOpacity>
            </Stack>
          </Margin>

          <Margin top={20}>
            <Stack alignItems="center" direction="column" spacing={20}>
              <CircleImage />
              <Stack direction="column" alignItems="center" spacing={5}>
                <Font fontSize={FontSize.xLarge} fontWeight="500">
                  Telmuun
                </Font>
                <Font>80308786</Font>
              </Stack>
            </Stack>
          </Margin>
          <Margin left={20}>
            <Stack>
              <Item icon={<Phone />} text="contact us" />
              <Item icon={<PrivacyPolicy />} text="Privacy policy" />
              <Item icon={<TermsCond />} text="Terms and Condition" />

              <Item icon={<Logout />} text="Log out" border={false} />
            </Stack>
          </Margin>
        </SafeAreaView>
      </Stack>
    </ScrollView>
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
  contain: {
    width: 350,
    padding: 20,
  },
  NoBorder: {
    width: 350,
    padding: 15,
  },

  Options: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    width: 350,
    padding: 15,
  },
});

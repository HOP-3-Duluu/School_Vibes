import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Calendar, Font} from '../components';

export const AddScreen = () => {
  const [name, setName] = useState('');
  const changeName = () => {
    setName('zurh zusem byluu');
  };
  return (
    <View>
      <Text>AddScreen</Text>
      <Calendar />
      <Button variant="outlined" onPress={() => changeName()}>
        ner solih
      </Button>
      <Font fontSize={33} color="red">
        {name}
      </Font>
    </View>
  );
};

const styles = StyleSheet.create({});

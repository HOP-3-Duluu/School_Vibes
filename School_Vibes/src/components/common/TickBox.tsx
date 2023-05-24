import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Font, Margin, Paper, Stack} from '../core';
import Colors from '../../constants/Colors';
import {ProfileIcon} from '../../assets';
import MoreIcon from '../../assets/icon/More';
import {useState} from 'react';
import Trash from '../../assets/icon/Trash';
import Edit from '../../assets/icon/Edit';

export const TickBox = ({title, chapter, userName, header}: any) => {
  const [state, setState] = useState(false);
  const [show, setDisplay] = useState('none');
  const changeState = () => {
    setState(!state);
  };
  const handleClick = () => {
    setDisplay('flex');

    setTimeout(() => {
      setDisplay('none');
    }, 3000);
  };

  return (
    <Paper
      style={{
        width: 280,
        backgroundColor: state ? '#8ECAE6' : '#f6f6f5',
        borderRadius: 15,
      }}>
      <TouchableOpacity
        onPress={handleClick}
        style={{
          zIndex: 1000,
          position: 'absolute',
          left: '82%',
          marginTop: '6%',
          width: 30,
          height: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MoreIcon color={state ? Colors.whiteText : Colors.text} />
      </TouchableOpacity>
      <View
        style={{
          zIndex: 100,
          position: 'absolute',
          left: '63%',
          marginTop: 50,
          height: 50,
          width: 100,
          borderRadius: 10,
          backgroundColor: Colors.whiteText,
          justifyContent: 'space-around',
          paddingLeft: '10%',
          display: show,
        }}>
        <TouchableOpacity style={{flexDirection: 'row', gap: 10}}>
          <Trash />
          <Font color={Colors.text} fontSize={12} fontWeight="400">
            Delete
          </Font>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', gap: 10}}>
          <Edit />
          <Font color={Colors.text} fontSize={12} fontWeight="400">
            Edit
          </Font>
        </TouchableOpacity>
      </View>
      <Margin vertical={20} left={20}>
        <Stack spacing={10}>
          <Stack spacing={8}>
            <Font
              fontWeight="600"
              color={state ? Colors.whiteText : Colors.text}
              fontSize={20}>
              {title}
            </Font>
            <Font
              color={state ? Colors.whiteText : Colors.text}
              fontWeight="500"
              fontSize={14}>
              Chapter {chapter}: {header}
            </Font>
          </Stack>
          <View style={{gap: 15, flexDirection: 'row'}}>
            <ProfileIcon
              color={state ? Colors.whiteText : Colors.text}
              size={20}
            />
            <Font
              color={state ? Colors.whiteText : Colors.text}
              fontWeight="400"
              fontSize={14}>
              {userName}
            </Font>
          </View>
        </Stack>
      </Margin>
    </Paper>
  );
};

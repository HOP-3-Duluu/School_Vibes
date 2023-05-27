import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {Font, Margin, Stack} from '../core';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import {TickBox} from './TickBox';
import {NoData} from '../../utils';
import {useNavigation} from '@react-navigation/native';

interface DataProps {
  id: number;
  title: {S: string};
  type: {S: string};
  author: {S: string};
  date: {S: string};
}

interface TimeProps {
  data: {
    message: DataProps[];
  };
}

export const Time: React.FC<TimeProps> = ({data}) => {
  const navigation = useNavigation();
  const renderItem = ({item}: {item: DataProps}) => {
    return (
      <Margin bottom={Spacing * 2}>
        <Stack direction="row" spacing={14}>
          <Margin top={Spacing / 2}>
            <Font fontWeight="bold" fontSize={18}>
              {moment(item.date.S).format('HH:mm')}
            </Font>
          </Margin>
          <View style={styles.border} />
          <TouchableOpacity
            onPress={() => navigation.push('LessonDetail', {item})}>
            <TickBox
              title={item?.title?.S}
              header={item?.type?.S}
              chapter={'item?.chapter.toString()'}
              userName={item?.author?.S}
            />
          </TouchableOpacity>
        </Stack>
      </Margin>
    );
  };

  return (
    <View style={styles.container}>
      {data?.message.length == 0 ? (
        <NoData />
      ) : (
        <FlatList
          data={data?.message}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 1.78,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  border: {
    borderWidth: 0.85,
    borderColor: Colors.gray,
    opacity: 0.5,
  },
});

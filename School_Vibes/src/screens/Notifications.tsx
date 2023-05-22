import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SectionList} from 'react-native';
import {View} from 'react-native';
import {Font, Margin, NotificationCard, Padding} from '../components';

export const Notifications = ({navigation}: any) => {
  const data: Array<{
    title: string;
    group: string;
    type: string;
    name: string;
    day: string;
    time: string;
    seen: boolean;
  }> = [
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-17T08:30:00.000Z',
      seen: false,
    },

    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: true,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      seen: true,
      time: '2023-05-18T08:30:00.000Z',
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'yesterday',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: true,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: true,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: true,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      seen: false,
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
      seen: false,
    },

    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      day: 'today',
      seen: false,
      time: '2023-05-18T08:30:00.000Z',
    },
    {
      title: 'asdf',
      group: '11a',
      type: 'add',
      name: 'nasaa',
      seen: false,
      day: 'today',
      time: '2023-05-18T08:30:00.000Z',
    },
  ];

  interface GroupedDataItem {
    title: string;
    data: Array<{
      title: string;
      group: string;
      type: string;
      name: string;
      day: string;
      time: string;
      seen: boolean;
    }>;
  }
  const groupedData: GroupedDataItem[] = [];

  data.forEach(item => {
    const existingGroup = groupedData.find(group => group.title === item.day);
    if (existingGroup) {
      existingGroup.data.push(item);
    } else {
      groupedData.push({title: item.day, data: [item]});
    }
  });

  groupedData.forEach(group => {
    group.data.sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
    );
  });

  const renderSectionHeader = ({section: {title}}: any) => (
    <View>
      <Font fontWeight="bold" fontSize={20}>
        {title}
      </Font>
      <Margin top={10} />
    </View>
  );

  const renderNotificationCard = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigation.push('LessonDetail', {name: item})}>
      <Margin top={5} bottom={5}>
        <NotificationCard
          seen={item.seen}
          title={item.title}
          group={item.group}
          type={item.type}
          name={item.name}
          time={item.time}
        />
      </Margin>
    </TouchableOpacity>
  );

  return (
    <Padding horizontal={20}>
      <View style={{height: '100%'}}>
        <SectionList
          sections={groupedData}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderNotificationCard}
        />
      </View>
    </Padding>
  );
};

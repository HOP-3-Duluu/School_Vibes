import React from 'react';
import {
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Font,
  Margin,
  Stack,
  TickBox,
  StatisticBox,
  Padding,
  GroupBox,
} from '../components';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import {Notification, Plus} from '../assets';

export const Home = () => {
  const navigation = useNavigation();

  const tickBoxData = [
    {
      id: '1',
      title: 'Mathematics',
      header: 'Introduction',
      chapter: 1,
      userName: 'Brooklyn Williamson',
    },
    {
      id: '2',
      title: 'Physics',
      header: 'Basic Concepts',
      chapter: 3,
      userName: 'Ethan Parker',
    },
    {
      id: '3',
      title: 'Chemistry',
      header: 'Chemical Reactions',
      chapter: 2,
      userName: 'Olivia Evans',
    },
  ];

  const groupData = [
    {id: '1', name: '11-4', description: '4r uy 11-4 angi', bar: 0.2},
    {
      id: '2',
      name: 'Ulaan zagalmai',
      description: '1r surguuli Ulaan zagalmai club',
      bar: 0.6,
    },
    {id: '3', name: 'Hop-3', description: 'Pinecone academy', bar: 1},
    {id: '4', name: 'English A', description: '11-a, 11-b English', bar: 0.7},
    {id: '5', name: 'Nova', description: 'Preparing for ielts', bar: 0.4},
    {id: '6', name: 'Hop-3', description: 'Pinecone academy', bar: 1},
    {id: '7', name: 'English A', description: '11-a, 11-b English', bar: 0.7},
    {id: '8', name: 'Nova', description: 'Preprin for ielts', bar: 0.4},
  ];

  const renderItem = ({item}: any) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    let colors = [
      Colors.active,
      Colors.primary,
      Colors.danger,
      Colors.success,
      Colors.warning,
      Colors.secondary,
    ];
    const main = colors[randomNumber];
    return (
      <Pressable
        onPress={() =>
          navigation.push('GroupDetail', {item: item, bgColor: main})
        }>
        <GroupBox
          Percentage={item.bar}
          bgColor={main}
          GroupName={item.name}
          Description={item.description}
        />
      </Pressable>
    );
  };

  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <SafeAreaView>
          <Padding horizontal={15} top={20}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Stack>
                <Font color={Colors.whiteText} fontWeight="500">
                  {getTimeOfDay()} 👋
                </Font>
                <Font fontSize={25} color={Colors.whiteText} fontWeight="600">
                  Nasanbat Ganbold
                </Font>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TouchableOpacity
                  onPress={() => navigation.push('Notifications')}
                  style={styles.notification}>
                  <Notification width={22} height={22} fill="white" />
                </TouchableOpacity>
                <Margin horizontal={6} />
                <View style={styles.border}>
                  <Image
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/headshot-portrait-happy-african-american-260nw-1783761902.jpg',
                    }}
                    style={styles.image}
                  />
                </View>
              </Stack>
            </Stack>
          </Padding>
        </SafeAreaView>
      </View>
      {/* <Padding horizontal={15}> */}
      <View style={{bottom: Spacing * 8}}>
        <Padding horizontal={15}>
          <StatisticBox
            Progress={77}
            AddedTaskToday={5}
            TasksToDo={5}
            DoneTasks={4}
          />
        </Padding>
        <Margin top={Spacing * 2} />
        <Padding left={15}>
          <Stack direction="row" alignItems="center">
            <Font fontWeight="bold" fontSize={25}>
              Groups
            </Font>
            <Margin horizontal={Spacing} />
            <TouchableOpacity>
              <Plus width={18} height={18} />
            </TouchableOpacity>
          </Stack>
          <Margin top={10} />
          <FlatList
            data={groupData}
            renderItem={renderItem}
            decelerationRate="fast"
            snapToInterval={Spacing}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal
          />
        </Padding>
        <Margin top={Spacing * 2} />
        <Padding horizontal={15}>
          <Font fontWeight="bold" fontSize={25}>
            Tasks Today
          </Font>
          {tickBoxData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push('LessonDetail', {item: item})}>
              <Margin top={10} key={item.id}>
                <TickBox
                  style={{width: '100%'}}
                  title={item.title}
                  header={item.header}
                  chapter={item.chapter}
                  userName={item.userName}
                />
              </Margin>
            </TouchableOpacity>
          ))}
        </Padding>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  renderItem: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 2 * Spacing,
  },
  header: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  notification: {
    backgroundColor: Colors.secondary,
    padding: 8,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
  },
  border: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 3,
    borderColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

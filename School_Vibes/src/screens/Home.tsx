import React, {useState} from 'react';
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
  Button,
  Input,
} from '../components';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import {Notification, Plus} from '../assets';
import {useAuth, UseData} from '../providers';
import {Loading, NoData} from '../utils';
import {ModalVisible} from '../components';
import {instance} from '../library';
export const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelect] = useState<any>();
  const {user} = useAuth();
  const [join, setJoin] = useState({
    join: '',
    detail: '',
    name: '',
  });
  const {groups, todayTask, loading} = UseData();

  const closeModal = () => {
    setModalVisible(false);
  };
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
          Percentage={0.7}
          bgColor={main}
          GroupName={item.name}
          Description={item.detail}
          members={item.members}
        />
      </Pressable>
    );
  };

  //realtime add hingut shud garc ireh
  //add task
  //signup

  const CreateGroup = async props => {
    try {
      const {data} = await instance.post('/group', props);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const JoinGroup = async ({id}) => {
    console.log(id, user?.id);
    try {
      const {data} = await instance.post('/joinGroup', {
        groupId: id,
        userId: user?.id.S,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
                  {user?.gmail.S?.split('@')[0]}
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
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Plus width={18} height={18} />
            </TouchableOpacity>
          </Stack>
          <Margin top={10} />
          {loading.group ? (
            <View style={{height: 100}}>
              <Loading />
            </View>
          ) : (
            <FlatList
              data={groups}
              renderItem={renderItem}
              decelerationRate="fast"
              snapToInterval={Spacing}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              horizontal
            />
          )}
        </Padding>
        <Margin top={Spacing * 2} />
        <Padding horizontal={15}>
          <Font fontWeight="bold" fontSize={25}>
            Tasks Today
          </Font>
          <Stack alignItems="center">
            {loading.task ? (
              <View style={{height: 100}}>
                <Loading />
              </View>
            ) : todayTask.length === 0 ? (
              <View style={{width: 200, height: 200}}>
                <NoData />
              </View>
            ) : (
              todayTask.map((item: any, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.push('LessonDetail', {item: item})}>
                  <Margin top={10} key={item.id}>
                    <TickBox
                      style={{width: '100%'}}
                      title={item.title?.S}
                      header={item.title?.S}
                      chapter={'Asdf'}
                      userName={item?.author?.S}
                    />
                  </Margin>
                </TouchableOpacity>
              ))
            )}
          </Stack>
        </Padding>
      </View>
      <ModalVisible
        visible={modalVisible}
        onClose={closeModal}
        title={'Select'}
        content={
          <Stack direction="column" spacing={Spacing}>
            {selectedOption === 'join' && (
              <Stack justifyContent="center">
                <Input
                  placeholder="Enter group code"
                  onChangeText={e => setJoin({...join, join: e})}
                />
                <Button
                  variant="contained"
                  onPress={() => JoinGroup({id: join.join})}>
                  Join Group
                </Button>
              </Stack>
            )}

            {selectedOption === 'create' && (
              <Stack alignItems="center" justifyContent="center">
                <Input
                  placeholder="Enter group name"
                  onChangeText={e => setJoin({...join, name: e})}
                />
                <Input
                  placeholder="Enter group description"
                  onChangeText={e => setJoin({...join, detail: e})}
                />
                <Button
                  variant="outlined"
                  onPress={() =>
                    CreateGroup({name: join.name, detail: join.detail})
                  }>
                  Create Group
                </Button>
              </Stack>
            )}
            {!selectedOption && (
              <Stack direction="row" spacing={Spacing}>
                <Button variant="contained" onPress={() => setSelect('join')}>
                  Join Group
                </Button>
                <Button variant="outlined" onPress={() => setSelect('create')}>
                  Create Group
                </Button>
              </Stack>
            )}
          </Stack>
        }
      />
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

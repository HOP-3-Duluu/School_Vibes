/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Font, Margin, ModalVisible, Padding, Stack, Tabs} from '../components';
import {Attechment, CalendarIcon, Close, Left} from '../assets';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import * as Progress from 'react-native-progress';
import {Dimensions} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
import {day, monthName, year} from '../library/Date';
import {UseData} from '../providers';
import {instance} from '../library';
import RNFS from 'react-native-fs';
import {useAsyncEffect} from '../hooks';
const Attachment = ({
  photo,
  index,
  DeleteAttachment,
}: {
  photo: any;
  DeleteAttachment: void;
  index: number;
}) => {
  return (
    <Margin top={Spacing * 2} bottom={Spacing}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Image
          source={{
            uri: photo,
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Font fontWeight="bold" fontSize={16}>
              Reference
            </Font>
            <Margin horizontal={37} />
            <Font color={Colors.gray} fontWeight="700">
              168KB
            </Font>
          </Stack>
          <Margin top={Spacing / 1.3} />
          <Progress.Bar progress={0.1} width={200} color={Colors.primary} />
        </Stack>
        <TouchableOpacity
          style={styles.close}
          onPress={() =>
            Alert.alert('Delete', 'Do you want delete it?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => DeleteAttachment(index)},
            ])
          }>
          <Close />
        </TouchableOpacity>
      </Stack>
    </Margin>
  );
};

export const AddScreen = ({navigation, route}: any) => {
  const [photos, setPhoto] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [values, setValues] = useState({
    groupName: '',
    image: [],
    title: '',
    description: '',
    date: '',
    type: '',
  });
  const {groups} = UseData();
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const handleChoosePhoto = () => {
    let options: any = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response: any) => {
      setPhoto((prev: any) => [...prev, response.assets[0].uri]);
    });
  };

  useAsyncEffect(async () => {
    photos.map(async photo => {
      // const fileContent = await RNFS.readFile(photo, 'base64');

      const data = await instance.post('createContent', {
        base: 'fileContent',
      });
      console.log(data);
      // setValues({
      //   ...values,
      //   image: [...values.image, data],
      // });
    });
  }, [photos]);

  const requstPhotoLibrary = async () => {
    try {
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(_response => {
        handleChoosePhoto();
      });
    } catch (error) {
      throw error;
    }
  };

  const DeleteAttachment = (id: number) => {
    setPhoto((prev: any) =>
      prev.filter((_el: any, index: number) => index != id),
    );
  };

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const addPhoto = async () => {
    try {
      const response = await fetch(picture);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result?.toString().split(',')[1];
        try {
          const s3Picture = await savePicture({base64: base64data});
        } catch (e) {
          throw e;
        }
      };
    } catch (error) {
      throw error;
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height,
        }}>
        <Padding horizontal={Spacing}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Left color={'white'} />
              </TouchableOpacity>
              <Margin left={Spacing} />
              <Font fontWeight="bold" fontSize={18} color={Colors.whiteText}>
                A Create New Task
              </Font>
            </Stack>
            <Padding right={Spacing / 2}>
              <TouchableOpacity>
                <Font fontWeight="bold" fontSize={18} color={Colors.secondary}>
                  Save
                </Font>
              </TouchableOpacity>
            </Padding>
          </Stack>
        </Padding>
        <Margin top={Spacing * 3}>
          <Stack alignItems="center">
            <Stack>
              <Padding bottom={Spacing / 2}>
                <Font color={Colors.secondary} fontWeight="bold">
                  Group
                </Font>
              </Padding>
              <Stack direction="row" alignItems="center">
                <View>
                  <Image
                    source={{
                      uri: 'https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff',
                    }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                    }}
                  />
                </View>
                <Margin horizontal={5} />
                <TouchableOpacity
                  onPress={() => {
                    if (!route?.params?.groupName) {
                      openModal();
                    } else {
                      Alert.alert(
                        `Зөвхөн ${route?.params?.groupName} дээрээ нэмнэ үү.`,
                      );
                    }
                  }}>
                  <View
                    style={{
                      borderBottomColor: Colors.secondary,
                      borderBottomWidth: 1,
                      width: width / 1.3,
                    }}>
                    <Padding bottom={Spacing / 2}>
                      <Font
                        style={{width: '100%'}}
                        fontWeight="500"
                        fontSize={17}
                        color={Colors.whiteText}>
                        {values.groupName ||
                          route?.params?.groupName ||
                          'Select group'}
                      </Font>
                    </Padding>
                  </View>
                </TouchableOpacity>
              </Stack>
            </Stack>
            <Margin top={Spacing * 2} />
            <Stack>
              <Padding bottom={Spacing / 2}>
                <Font color={Colors.secondary} fontWeight="bold">
                  Title
                </Font>
              </Padding>
              <View style={[styles.inputContainer, {width: width / 1.09}]}>
                <TextInput
                  style={styles.input}
                  value={values.title}
                  onChangeText={inputText =>
                    setValues({...values, title: inputText})
                  }
                  placeholder="Name"
                />
                {text.length > 0 && (
                  <TouchableOpacity
                    onPress={() => setText('')}
                    style={styles.clearButton}>
                    <Close stroke={Colors.secondary} />
                  </TouchableOpacity>
                )}
              </View>
            </Stack>
            <Margin top={Spacing * 2} />
            <Stack direction="row" justifyContent="center" style={{width}}>
              <Stack>
                <Padding bottom={Spacing / 2}>
                  <Font color={Colors.secondary} fontWeight="bold">
                    Label
                  </Font>
                </Padding>
                <Margin top={Spacing} />
                <Stack direction="row" alignItems="center">
                  <View
                    style={{
                      borderBottomColor: Colors.secondary,
                      borderBottomWidth: 1,
                      width: width / 2.5,
                    }}>
                    <Padding bottom={Spacing / 2}>
                      <Stack direction="row" alignItems="center">
                        <CalendarIcon color="white" />
                        <Margin horizontal={4} />
                        <Font
                          style={{width: '100%'}}
                          fontSize={17}
                          color={Colors.whiteText}>
                          {monthName} {day} , {year}
                        </Font>
                      </Stack>
                    </Padding>
                  </View>
                  <Margin horizontal={Spacing * 1.5}>
                    <Font color={Colors.whiteText}>---</Font>
                  </Margin>
                  <View
                    style={{
                      borderBottomColor: Colors.secondary,
                      borderBottomWidth: 1,
                      width: width / 2.5,
                    }}>
                    <Padding bottom={Spacing / 2}>
                      <Stack direction="row" alignItems="center">
                        <CalendarIcon color="white" />
                        <Margin horizontal={4} />
                        <Font
                          style={{width: '100%'}}
                          fontSize={17}
                          color={Colors.whiteText}>
                          {monthName} {day} , {year}
                        </Font>
                      </Stack>
                    </Padding>
                  </View>
                </Stack>
              </Stack>
            </Stack>
            <Margin top={Spacing * 2} />
            <Stack>
              <Padding bottom={Spacing / 2}>
                <Font color={Colors.secondary} fontWeight="bold">
                  Label
                </Font>
              </Padding>
              <View style={[styles.inputContainer, {width: width / 1.09}]}>
                <TextInput
                  style={styles.input}
                  value={values.description}
                  onChangeText={inputText =>
                    setValues({...values, description: inputText})
                  }
                  placeholder="Name"
                />
                {text.length > 0 && (
                  <TouchableOpacity
                    onPress={() => setText('')}
                    style={styles.clearButton}>
                    <Close stroke={Colors.secondary} />
                  </TouchableOpacity>
                )}
              </View>
            </Stack>
            <Margin top={Spacing} bottom={Spacing}>
              <Tabs tabs={['Easy', 'Medium', 'Hard']} setValues={setValues} />
            </Margin>
          </Stack>
        </Margin>
        <Stack width="100%" alignItems="flex-end">
          <Stack style={styles.create} width="100%">
            <Padding top={Spacing * 3} horizontal={Spacing * 2}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.desc}>
                  <Font fontWeight="bold" fontSize={18}>
                    Description
                  </Font>
                </View>
                <TouchableOpacity
                  style={styles.attachment}
                  onPress={requstPhotoLibrary}>
                  <Attechment />
                </TouchableOpacity>
              </View>
              <Margin top={Spacing}>
                <Font fontWeight="bold" fontSize={16} color={Colors.gray}>
                  ATTACHMENTS
                </Font>
                <Margin top={Spacing / 2} />
                <ScrollView
                  style={{height: 110}}
                  showsVerticalScrollIndicator={false}>
                  {photos.length != 0 ? (
                    photos.map((photo: any, index: number) => (
                      <Attachment
                        photo={photo}
                        index={index}
                        key={index}
                        DeleteAttachment={DeleteAttachment}
                      />
                    ))
                  ) : (
                    <View>
                      <Font>Dont choose photo</Font>
                    </View>
                  )}
                </ScrollView>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => Alert.alert('Created')}>
                  <Font
                    fontWeight="bold"
                    fontSize={18}
                    color={Colors.whiteText}>
                    CREATE TASK
                  </Font>
                </TouchableOpacity>
              </Margin>
            </Padding>
          </Stack>
        </Stack>
      </SafeAreaView>
      <ModalVisible
        visible={modalVisible}
        onClose={closeModal}
        title="Group Names"
        content={
          <View>
            {groups.map((group: any) => (
              <TouchableOpacity
                style={styles.groupName}
                key={group.id}
                onPress={() => {
                  setValues({...values, groupName: group.name});
                  setModalVisible(false);
                }}>
                <Font fontSize={20}>{group.name}</Font>
              </TouchableOpacity>
            ))}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  create: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  attachment: {
    borderColor: '#cfcccc',
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
  },
  desc: {
    borderBottomColor: '#cfcccc',
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 10,
  },
  close: {
    borderColor: '#f6f6f5',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#f6f6f5',
  },
  button: {
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    flex: 1,
    color: 'white',
  },
  clearButton: {
    marginLeft: 10,
    paddingVertical: 5,
  },
  groupName: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

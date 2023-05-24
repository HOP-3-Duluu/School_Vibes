import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Font, Input, Margin, Padding, Stack} from '../components';
import {Attechment, Close, Left} from '../assets';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import * as Progress from 'react-native-progress';
import {Dimensions} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
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

export const AddScreen = ({navigation}: any) => {
  const [photos, setPhoto] = useState<any>([]);
  const height = Dimensions.get('screen').height;
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
            <TouchableOpacity>
              <Font fontWeight="bold" fontSize={18} color={Colors.secondary}>
                Save
              </Font>
            </TouchableOpacity>
          </Stack>
        </Padding>
        <Margin top={Spacing * 3}>
          <Stack>
            <Stack>
              <Font>Label</Font>
              <Stack direction="row">
                <View>
                  <Font>IMage</Font>
                </View>
              </Stack>
              <Input />
            </Stack>
            <Font>Lesson</Font>
            <Font>deadline today - pick </Font>
            <Font>DEscription</Font>
            <Font>CAetgory (easy , medium , hard)</Font>
          </Stack>
        </Margin>
        <Stack width="100%">
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
});

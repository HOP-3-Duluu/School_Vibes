/* eslint-disable curly */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Font, Margin, Stack} from '../core';
import Colors from '../../constants/Colors';

interface NotificationProps {
  title: string;
  group: string;
  type?: string;
  groupImage?: string;
  time: string;
  name: string;
  seen: boolean;
}

export const NotificationCard = ({
  title,
  group,
  type,
  groupImage,
  name,
  seen,
  time,
}: NotificationProps) => {
  function getTimeDifference(startDate: any) {
    const start = new Date(startDate);
    const end = new Date();
    const timeDifference = end.getTime() - start.getTime();
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (days !== 0) return `${days} days ago`;
    else if (hours !== 0) return `${hours} hours ago`;
    else return `${minutes} minutes ago`;
  }

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {/* <Image source={{uri: groupImage}} /> */}
      <Stack direction="row" alignItems="center">
        <View style={styles.image} />
        <Margin left={10} />
        <Stack>
          <Font fontSize={15}>
            <Font fontWeight="bold" fontSize={15}>
              {name}{' '}
            </Font>
            added {title} lesson for {group}
          </Font>
          <Margin top={2} />
          <Font color={Colors.gray} fontWeight="500">
            {getTimeDifference(time)}
          </Font>
        </Stack>
      </Stack>
      {seen ? <View style={styles.dot} /> : <View />}
    </Stack>
  );
};
export default NotificationCard;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: Colors.primary,
  },
});

// diff "${PODS_PODFILE_DIR_PATH}/Podfile.lock" "${PODS_ROOT}/Manifest.lock" > /dev/null
// if [ $? != 0 ] ; then
//     # print error to STDERR
//     echo "error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation." >&2
//     exit 1
// fi
// # This output is used by Xcode 'outputs' to avoid re-running this script phase.
// echo "SUCCESS" > "${SCRIPT_OUTPUT_FILE_0}"

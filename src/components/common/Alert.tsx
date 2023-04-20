import React from 'react';
import {View, StyleSheet, Button, Alert, Text} from 'react-native';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

interface StatusProp {
  status?: 'success' | 'warning' | 'information' | 'error';
  message?: string;
  color1?: string;
  color2?: string;
  color3?: string;
}

const CreateAlert = ({status = 'information'}: StatusProp) => {
  const colors = [['#D1E0D6', '#61B267']];

  return (
<AlertNotificationRoot>
  <View>

    <Button
      title={'dialog box'}
      onPress={() =>
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is dialog box success',
          button: 'close',
        })
      }
    />

    <Button
      title={'toast notification'}
      onPress={() =>
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is toast notification success',
        })
      }
    />
  </View>
</AlertNotificationRoot>
  )
};

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1E0D6',
    opacity: 1,
    padding: 0,
    width: 300,
    height: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#61B267',
    borderRadius: 15,
  },
  button: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 15,
    color: 'black',
    margin: 0,
  },
});
export default CreateAlert;

// interface MarginProps {
//     children: ReactNode;
//     All?: number;
//     Right?: number;
//     Left?: number;
//     Top?: number;
//     Bottom?: number;
//     Horizontal?: number;
//     Vertical?: number;
//     style?: StyleProp<ViewStyle>;
// }

// export const Margin = ({
//     children,
//     All,
//     Left,
//     Right,
//     Top,
//     Bottom,
//     style,
//     Horizontal,
//     Vertical
// }: MarginProps) => {

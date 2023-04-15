import React from 'react';
import {View, StyleSheet, Button, Alert, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts'
interface StatusProp {
  status?: 'success'  | 'warning' | 'information' |'error' ;
  message: string ;
  color1?:string;
  color2?:string;
  color3?:string;

}

const CreateAlert =  ({status = 'information' }  :StatusProp) => {
  const colors= [['#D1E0D6','#61B267']]
{}
 const Rt = ()=>{
  return(

  <View>
    <Text>1111</Text>
    <Text>lalala</Text>
  </View>
  )
 }

  return (
    <View >
      <Button title={'2-Button Alert'} />
      {/* <AwesomeAlert contentContainerStyle={styles.cont}   show={true} messageStyle={styles.text} cancel message='A succesful alert' /> */}

      <AwesomeAlert    contentContainerStyle={styles.cont} show={true} title='lalalal' message='aaaasaaaaalalaaaalalalalalalalal'  />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#D1E0D6',
    opacity:1,
    padding:0,
    width:300,
    height:300,
    borderStyle : 'solid',
    borderWidth : 1,
    borderColor:'#61B267',
    borderRadius:15
 
  },
  button: {
    width:30,
    height:30
  }, 
   text: {
 fontSize: 15,
 color:'black',
 margin:0
  },
  
})
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
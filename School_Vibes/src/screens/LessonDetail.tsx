import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Font, Margin, Padding, Stack} from '../components';
import {Left} from '../assets';
import {Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import ReadMore from '@fawazahmed/react-native-read-more';

const Card = () => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  return (
    <View>
      <Padding right={Spacing * 2}>
        <Stack alignItems="center" justifyContent="center">
          <Image
            source={require('../assets/images/lesson.jpg')}
            resizeMode="contain"
            style={{width, height: height / 2}}
          />
        </Stack>
      </Padding>
    </View>
  );
};

export const LessonDetail = props => {
  const {route, navigation} = props;
  const width = Dimensions.get('screen').width;
  const {item} = route.params;
  console.log(item);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <SafeAreaView>
          <Image
            source={require('../assets/images/lesson.jpeg')}
            resizeMode="cover"
            blurRadius={8}
            style={{width, height: 300, position: 'absolute', borderRadius: 5}}
          />
        </SafeAreaView>

        <View style={styles.scrollViewContent}>
          <Padding left={Spacing * 1.5} top={Spacing}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}>
              <Left color={Colors.background} />
            </TouchableOpacity>
          </Padding>
          <Margin top={Spacing * 2} />
          <Padding horizontal={Spacing * 2}>
            <Font color={Colors.whiteText} fontWeight="bold" fontSize={30}>
              {item?.title?.S}
            </Font>

            <Font color={Colors.gray} lineHeight={30}>
              {item?.type.S}
            </Font>
            <Margin top={Spacing * 2} />

            <Stack direction="row" alignItems="center">
              <Image
                source={{
                  uri: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
                }}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              <Margin horizontal={Spacing / 2} />
              {/* <Font color={Colors.whiteText} fontWeight="600" fontSize={20}>
                {item?.author?.S}
              </Font> */}
            </Stack>
            <Margin top={Spacing * 4} />
            <View>
              <Margin top={10}>
                <ReadMore
                  numberOfLines={2}
                  seeLessStyle={{color: Colors.primary, fontSize: 20}}
                  seeMoreStyle={{color: Colors.primary, fontSize: 20}}
                  seeMoreText="Read more"
                  seeLessText="Read less">
                  <Font fontSize={20}>{item?.description?.S}</Font>
                </ReadMore>
                <Margin vertical={Spacing} />
                <Card />
              </Margin>
            </View>
          </Padding>
        </View>
      </ScrollView>
      <Padding horizontal={Spacing * 2} style={styles.doneContainer}>
        <TouchableOpacity style={styles.done}>
          <Font color={Colors.whiteText} fontWeight="bold" fontSize={20}>
            Done
          </Font>
        </TouchableOpacity>
      </Padding>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: Spacing * 10,
  },
  back: {
    backgroundColor: Colors.gray,
    borderRadius: 50,
    width: 45,
    padding: 8,
  },
  doneContainer: {
    marginBottom: Spacing * 2,
  },
  done: {
    borderRadius: 10,
    backgroundColor: '#2E8B57',
    padding: 20,
    alignItems: 'center',
  },
});

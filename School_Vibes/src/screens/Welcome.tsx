/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {FC, useRef, useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Font, Margin, Stack} from '../components';
import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('window');

interface SlideItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
}

interface SlideProps {
  item: SlideItem;
}

const slides: SlideProps[] = [
  {
    id: '1',
    image: require('../assets/images/onBoarding1.png'),
    title: 'Best Digital Solution',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../assets/images/onBoarding2.png'),
    title: 'Achieve Your Goals',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../assets/images/onBoarding3.png'),
    title: 'Increase Your Value',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Slide: FC<SlideProps> = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Margin top={20}>
          <Font
            color={Colors.background}
            fontSize={22}
            fontWeight="bold"
            textAlign="center">
            {item?.title}
          </Font>
        </Margin>
        <Margin top={10}>
          <Font
            color={Colors.background}
            fontSize={13}
            textAlign="center"
            lineHeight={23}>
            {item?.subtitle}
          </Font>
        </Margin>
      </View>
    </View>
  );
};

export const Welcome: FC<{navigation: any}> = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<any>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <Margin top={20}>
          <Stack direction="row" justifyContent="center">
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex === index && {
                    backgroundColor: Colors.background,
                    width: 25,
                  },
                ]}
              />
            ))}
          </Stack>
        </Margin>

        <View style={{marginBottom: 20}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.push('Login')}>
                <Font fontWeight="bold" fontSize={15} color={Colors.primary}>
                  GET STARTED
                </Font>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: Colors.background,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Font fontSize={15} fontWeight="bold" color={Colors.background}>
                  SKIP
                </Font>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Font fontWeight="bold" fontSize={15} color={Colors.primary}>
                  NEXT
                </Font>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
      <StatusBar backgroundColor={Colors.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

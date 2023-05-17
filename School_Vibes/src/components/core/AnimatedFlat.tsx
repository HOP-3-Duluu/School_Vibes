import React, {useRef, useEffect} from 'react';
import {Animated, FlatList} from 'react-native';

const AnimatedList = ({data, renderItem}: any) => {
  const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.stagger(
      100,
      animatedValues.map((item: any) =>
        Animated.spring(item, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ),
    ).start();
  }, [animatedValues]);

  const renderItemWithAnimation = ({item, index}: any) => {
    const animatedStyle = {
      opacity: animatedValues[index],
      transform: [
        {
          scale: animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    };

    return (
      <Animated.View style={animatedStyle}>
        {renderItem({item, index})}
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItemWithAnimation}
    />
  );
};

export default AnimatedList;

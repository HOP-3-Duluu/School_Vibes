import React, {useEffect, useRef} from 'react';
import AnimatedLottieView from 'lottie-react-native';

export const NoData = () => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <AnimatedLottieView
      ref={animationRef}
      source={require('../animation/noData.json')}
      autoPlay
      loop={true}
    />
  );
};

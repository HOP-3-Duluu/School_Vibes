import React, {useEffect, useRef} from 'react';
import AnimatedLottieView from 'lottie-react-native';

export const Loading = () => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <AnimatedLottieView
      ref={animationRef}
      source={require('../animation/loadging.json')}
      autoPlay
      loop={true}
    />
  );
};

import React, {useRef, useEffect} from 'react';
import {View, Text, Modal, StyleSheet, Animated} from 'react-native';
import Spacing from '../../constants/Spacing';
import {Margin} from './Margin';

export const ModalVisible = ({visible, onClose, title, content}: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, visible]);

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, {opacity: fadeAnim}]}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Margin top={Spacing * 2}>{content}</Margin>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    paddingHorizontal: Spacing * 5,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    transform: [{scale: 0.8}],
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 40,
  },
});

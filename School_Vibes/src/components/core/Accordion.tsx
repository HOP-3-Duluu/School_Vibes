import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Colors from '../../constants/Colors';

import {Stack} from './Stack';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={toggleAccordion}
        style={styles.header}>
        <Stack direction="row" alignItems="center" spacing={5}>
          <View style={styles.iconContainer}>
            <View style={styles.icon} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </Stack>
        <Text style={styles.icon}>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isExpanded && <View style={styles.body}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  body: {
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.background,
  },
  iconContainer: {
    width: 28,
    height: 28,
    backgroundColor: Colors.background,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: Colors.background,
  },
});

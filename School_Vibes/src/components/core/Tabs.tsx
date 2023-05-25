import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import Colors from '../../constants/Colors';
import {Font} from './Text';
import {Dimensions} from 'react-native';
import Spacing from '../../constants/Spacing';

interface TabsProps {
  tabs: string[];
  initialTab: number;
  onTabChange: () => void;
}

export const Tabs: FC<TabsProps> = ({tabs, initialTab, onTabChange}) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);
  const width = Dimensions.get('screen').width;
  const handleTabChange = (index: number) => {
    onTabChange;
    setActiveTab(index);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.tabs, {width, paddingHorizontal: Spacing * 1.5}]}>
        {tabs.map((tab: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              activeTab === index && styles.activeTab,
              {width: width / 4},
            ]}
            onPress={() => handleTabChange(index)}>
            <Font
              color={activeTab === index ? Colors.background : Colors.darkText}
              fontWeight="bold">
              {tab}
            </Font>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Colors.background,
    borderRadius: Spacing / 1.5,
  },
  activeTab: {
    backgroundColor: Colors.secondary,
    borderRadius: Spacing / 1.5,
  },

  tabContent: {
    padding: 10,
  },
  activeTabContent: {
    display: 'flex',
  },
  inactiveTabContent: {
    display: 'none',
  },
});

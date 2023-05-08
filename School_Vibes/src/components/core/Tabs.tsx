import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {ComponentType, FC, useState} from 'react';
import Colors from '../../constants/Colors';
import {Font} from './Text';

interface Tab {
  id: number;
  component: ComponentType<any>;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  initialTab: number;
  onTabChange: () => void;
}

export const Tabs: FC<TabsProps> = ({tabs, initialTab, onTabChange}) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);
  const handleTabChange = (index: number) => {
    onTabChange;
    setActiveTab(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map((tab: Tab, index: number) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === index && styles.activeTab]}
            onPress={() => handleTabChange(index)}>
            <Font
              color={activeTab === index ? Colors.background : Colors.darkText}
              fontWeight="bold">
              {tab.label}
            </Font>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        {tabs.map((tab: Tab, index: number) => (
          <View
            key={index}
            style={[
              styles.tabContent,
              activeTab === index
                ? styles.activeTabContent
                : styles.inactiveTabContent,
            ]}>
            {activeTab === index ? tab.component : null}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  content: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    padding: 10,
  },
  activeTabContent: {
    display: 'flex',
  },
  inactiveTabContent: {
    display: 'none',
  },
});

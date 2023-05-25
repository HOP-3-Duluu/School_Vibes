import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export const Autocomplete = ({data, onSelect}) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = text => {
    setQuery(text);

    const filteredItems = data.filter(item =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filteredItems);
  };

  const handleItemSelect = item => {
    setQuery(item);
    onSelect(item);
    setFilteredData([]);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemSelect(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  itemText: {
    fontSize: 16,
  },
});

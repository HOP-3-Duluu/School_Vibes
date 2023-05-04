import {useState} from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const onChangeText = (text: string) => {
    setValue(text);
  };
  return [value, onChangeText];
};

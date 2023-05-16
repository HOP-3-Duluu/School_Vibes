import {SafeAreaView} from 'react-native';
import {Stack, TickBox} from '../components';

export const Task = () => {
  return (
    <SafeAreaView>
      <Stack spacing={20}>
        <TickBox title='Mathematics' header='Introduction' chapter={1} userName='Brooklyn Williamson' />
        <TickBox title='Biology' header='Animal Kingdom' chapter={3} userName='Julie Watson' />
      </Stack>
    </SafeAreaView>
  );
};

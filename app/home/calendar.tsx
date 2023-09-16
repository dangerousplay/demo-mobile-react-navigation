import { Text, View } from 'react-native';
import { Base } from '@/base';


export const Calendar = () => {
  return (
    <Base>
      <View className="items-center">
        <Text className="text-2xl font-bold">Calendar Tab</Text>
        <Text>A great tool for planning :)</Text>
      </View>
    </Base>
  );
};

export default Calendar;
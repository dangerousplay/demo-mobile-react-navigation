import { Text, View } from 'react-native';
import { Base } from '@/base';


export const Settings = () => {
  return (
    <Base>
      <View className="items-center">
        <Text className="text-2xl font-bold">Settings Tab</Text>
        <Text>A great place :)</Text>
      </View>
    </Base>
  );
};

export default Settings;
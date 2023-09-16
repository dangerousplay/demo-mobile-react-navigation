import { Tabs } from 'expo-router/tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';


export const TabBarIcon = ({title}) => {
  return (
    <View className="flex-col items-center mt-10">
      <Text className="mt-5 text-sm opacity-50" >
        {title}
      </Text>
    </View>
  );
};

export const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tabs.Screen
        name="user-profile"
        options={{
          href: '/home/user-profile',
          title: '',
          tabBarIcon: ({ color }) => (<TabBarIcon title="profile" />),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: '/home/settings',
          title: '',
          tabBarIcon: ({ color }) => (<TabBarIcon title="settings" />),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          href: '/home/calendar',
          title: '',
          tabBarIcon: ({ color }) => (<TabBarIcon title="calendar" />),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
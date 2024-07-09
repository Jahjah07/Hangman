import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native'; // Import StatusBar
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Determine the background color based on colorScheme
  const backgroundColor = Colors[colorScheme ?? 'light'].background;

  // Determine the appropriate text color based on background color
  const tabBarActiveTintColor =
    backgroundColor === 'black' ? 'white' : 'black';

  // Determine the background color of the tab bar
  const tabBarBackgroundColor =
    tabBarActiveTintColor === 'black' ? 'black' : 'white';

  return (
    <>
      <StatusBar
        barStyle={backgroundColor === 'black' ? 'light-content' : 'dark-content'}
        backgroundColor={tabBarBackgroundColor}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarStyle: {
            backgroundColor: tabBarBackgroundColor,
            borderTopWidth: 0, // Remove the top border of the tab bar
          },
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon} 
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-bold' : 'font-pregular'} text-xs`} style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
   <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFC472',
                tabBarInactiveTintColor: '#979797',
                tabBarStyle: {
                    backgroundColor: '#030106',
                    borderTopWidth: 1,
                    borderTopColor: '#030106',
                    height: 84,                     
                }
            }}
        >
            <Tabs.Screen 
                name="concierge"
                options={{
                    title: 'Concierge',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                           icon={icons.concierge} 
                           color={color}
                           name="Concierge"
                           focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                           icon={icons.sweetspot} 
                           color={color}
                           name="Home"
                           focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="settings"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                           icon={icons.settings} 
                           color={color}
                           name="Settings"
                           focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
   </>
  )
}

export default TabsLayout
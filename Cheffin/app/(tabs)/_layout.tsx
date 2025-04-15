import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';


import Octicons from '@expo/vector-icons/Octicons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        
        headerStyle: {
          backgroundColor: "#FCF9EA",
        },
        headerTintColor: "#7F6043",
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "#FCF9EA",
          borderTopColor: "#FCF9EA",
        },
        tabBarActiveTintColor: "Colors[colorScheme ?? 'light'].tint",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          
          tabBarIcon: ({ color }) => <Octicons name="home" size={25} color="#7F6043" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Octicons name="bell" size={25} color="#7F6043" 
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                  
                )}
              </Pressable>
            </Link>
          ),
        }}
        
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <Octicons name="search" size={25} color="#7F6043" />,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <Octicons name="diff-added" size={25} color="#7F6043" />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }: { color: string }) => <Octicons name="person" size={25} color="#7F6043" />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Octicons 
                    name="gear" 
                    size={25} 
                    color="#7F6043"
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

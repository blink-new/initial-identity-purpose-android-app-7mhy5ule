import { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { Home, User, Target, FileText } from 'lucide-react-native';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0.5, borderTopColor: '#eee', height: 60, paddingBottom: 5, paddingTop: 5 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 2 },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'الرئيسية',
            tabBarIcon: ({ color, size }) => <Home color={color} size={size * 0.9} strokeWidth={2.5} />,
          }}
        />
        <Tabs.Screen
          name="identity"
          options={{
            title: 'هويتك',
            tabBarIcon: ({ color, size }) => <User color={color} size={size * 0.9} strokeWidth={2.5} />,
          }}
        />
        <Tabs.Screen
          name="purpose"
          options={{
            title: 'هدفك',
            tabBarIcon: ({ color, size }) => <Target color={color} size={size * 0.9} strokeWidth={2.5} />,
          }}
        />
        <Tabs.Screen
          name="summary"
          options={{
            title: 'الملخص',
            tabBarIcon: ({ color, size }) => <FileText color={color} size={size * 0.9} strokeWidth={2.5} />,
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}
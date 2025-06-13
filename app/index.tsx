import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Card } from '@/components/Card';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحبًا بك في تطبيق الهوية والهدف</Text>
      <Text style={styles.text}>ابدأ رحلتك في اكتشاف هويتك وتحديد هدفك.</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/identity')}>
        <Text style={styles.buttonText}>ابدأ الآن</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    shadowColor: '#007AFF',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
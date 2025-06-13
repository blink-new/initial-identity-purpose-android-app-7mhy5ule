import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function IdentityScreen() {
  const [identity, setIdentity] = useState('');
  const router = useRouter();

  const handleNext = () => {
    // TODO: Save identity data
    router.push('/purpose');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ما هي هويتك؟</Text>
      <Text style={styles.subtitle}>صف الجوانب التي تشكل هويتك الأساسية.</Text>
      <TextInput
        style={styles.input}
        placeholder="مثال: مطور، فنان، رياضي..."
        value={identity}
        onChangeText={setIdentity}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>التالي</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 24,
    color: '#333',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#007AFF',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
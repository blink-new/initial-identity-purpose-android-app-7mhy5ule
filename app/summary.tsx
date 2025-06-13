import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function SummaryScreen() {
  const router = useRouter();
  // In a real app, you would get these from a global state (e.g., Context API, Redux, Zustand)
  // For now, we'll simulate receiving them or leave them as placeholders.
  const params = useLocalSearchParams();
  const identity = params.identity || "لم يتم تحديد الهوية بعد";
  const purpose = params.purpose || "لم يتم تحديد الهدف بعد";

  const handleEdit = () => {
    router.push('/identity'); // Go back to the first screen to edit
  };

  const handleRestart = () => {
    // TODO: Clear saved data
    router.replace('/index'); // Use replace to clear navigation history for a fresh start
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>ملخص رحلتك</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>هويتك</Text>
          <Text style={styles.cardContent}>{identity}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>هدفك</Text>
          <Text style={styles.cardContent}>{purpose}</Text>
        </View>

        <Text style={styles.infoText}>
          هذا هو ملخص ما قمت بتحديده. يمكنك دائمًا العودة وتعديل اختياراتك.
        </Text>

        <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEdit}>
          <Text style={styles.buttonText}>تعديل</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.restartButton]} onPress={handleRestart}>
          <Text style={styles.buttonText}>البدء من جديد</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
    marginBottom: 24,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
  },
  infoText: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  editButton: {
    backgroundColor: '#007AFF',
    shadowColor: '#007AFF',
  },
  restartButton: {
    backgroundColor: '#FF3B30', // Red color for restart/delete actions
    shadowColor: '#FF3B30',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

// List of bathroom locations
const bathrooms = [
  'Cafeteria',
  'Language Wing',
  'History Wing',
  'English Wing',
  'Math Wing',
  'Science Wing',
];

// Hardcoded status for each bathroom
const fixedBathroomStatus: Record<string, boolean> = {
  Cafeteria: true,
  'Language Wing': false,
  'History Wing': true,
  'English Wing': false,
  'Math Wing': true,
  'Science Wing': true,
};

export default function BathroomSchedule() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../photos/ehslogo.png')} style={styles.ehsLogo} />
        <Text style={styles.headerTitle}>Bathroom Availability Tracker</Text>
        {/* Spacer to balance layout */}
        <View style={{ width: 70 }} />
      </View>

      {/* Bathroom List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {bathrooms.map((name) => {
          const isAvailable = fixedBathroomStatus[name];

          return (
            <View key={name} style={styles.bathroomRow}>
              <Text style={styles.bathroomName}>{name}</Text>
              <Switch
                value={isAvailable}
                disabled
                trackColor={{ false: '#ff4d4d', true: '#4caf50' }}
                thumbColor={isAvailable ? '#2e7d32' : '#b71c1c'}
                accessibilityLabel={`${name} is ${isAvailable ? 'available' : 'closed'}`}
              />
              <Text
                style={[
                  styles.statusText,
                  { color: isAvailable ? '#2e7d32' : '#b71c1c' },
                ]}
              >
                {isAvailable ? 'Available' : 'Closed'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    height: 100,
    backgroundColor: '#ff1e1e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  ehsLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  bathroomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  bathroomName: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
  },
});

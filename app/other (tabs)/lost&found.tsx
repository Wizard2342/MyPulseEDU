import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BusTracker() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#b7a5a5ff' }}>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Lost & Found Coming Soon!</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7a5a5ff',
  },
  text: {
    color: '#000',
    padding: 20,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
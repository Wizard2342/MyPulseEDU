import { Link } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

export default function Index() {
  const frontBus = [
    { id: 'ne1', source: require('../photos/ne1.png'), top: 60, left: 607, rotation: '4deg' },
    { id: 'ehs1', source: require('../photos/ehs1.png'), top: 93, left: 607, rotation: '4deg' },
    { id: 'ehs2', source: require('../photos/ehs2.png'), top: 123, left: 607, rotation: '3deg' },
    { id: 'ehs3', source: require('../photos/ehs3.png'), top: 153, left: 607, rotation: '3deg' },
    { id: 'ehs4', source: require('../photos/ehs4.png'), top: 183, left: 607, rotation: '2deg' },
    { id: 'ehs5', source: require('../photos/ehs5.png'), top: 213, left: 604, rotation: '12deg' },
    { id: 'ehs6', source: require('../photos/ehs6.png'), top: 243, left: 595, rotation: '25deg' },
    { id: 'ehs7', source: require('../photos/ehs7.png'), top: 265, left: 575, rotation: '60deg' },
    { id: 'ehs8', source: require('../photos/ehs8.png'), top: 280, left: 550, rotation: '60deg' },
    { id: 'ehs9', source: require('../photos/ehs9.png'), top: 288, left: 520, rotation: '75deg' },
    { id: 'ehs10', source: require('../photos/ehs10.png'), top: 295, left: 490, rotation: '70deg' },
    { id: 'ehs11', source: require('../photos/ehs11.png'), top: 305, left: 460, rotation: '70deg' },
    { id: 'ehs12', source: require('../photos/ehs12.png'), top: 315, left: 430, rotation: '70deg' },
    { id: 'ehs13', source: require('../photos/ehs13.png'), top: 325, left: 400, rotation: '70deg' },
  ];

  const backBus = [
    { id: 'ehs14', source: require('../photos/ehs14.png'), top: 150, left: 136, rotation: '2deg' },
    { id: 'ehs15', source: require('../photos/ehs15.png'), top: 200, left: 134, rotation: '2deg' },
    { id: 'ehs16', source: require('../photos/ehs16.png'), top: 140, left: 90, rotation: '2deg' },
    { id: 'ehs17', source: require('../photos/ehs17.png'), top: 190, left: 90, rotation: '2deg' },
    { id: 'ehs18', source: require('../photos/ehs18.png'), top: 240, left: 87, rotation: '2deg' },
    { id: 'ehs19', source: require('../photos/ehs19.png'), top: 290, left: 85, rotation: '2deg' },
    { id: 'ehs20', source: require('../photos/ehs20.png'), top: 340, left: 83, rotation: '2deg' },
    { id: 'ehs21', source: require('../photos/ehs21.png'), top: 390, left: 81, rotation: '2deg' },
    { id: 'ehs22', source: require('../photos/ehs22.png'), top: 440, left: 50, rotation: '90deg' },
    { id: 'ehs23', source: require('../photos/ehs23.png'), top: 400, left: 15, rotation: '170deg' },
    { id: 'ehs24', source: require('../photos/ehs24.png'), top: 340, left: 18, rotation: '182deg' },
    { id: 'ehs25', source: require('../photos/ehs25.png'), top: 290, left: 20, rotation: '182deg' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '##D3D3D3' }}>
      {/* 🦅 Floating Eagles Logo above all */}
      <Image source={require('../photos/ehslogo.png')} style={styles.eagles} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bus Location</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>Below you can view where each bus is located!</Text>

        {/* FRONT END MAP WITH ZOOM & PAN */}
        <ScrollView
          style={styles.zoomWrapper}
          horizontal
          maximumZoomScale={3}
          minimumZoomScale={1}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          <View style={[styles.imageContainer, { width: 700 }]}>
            <Image source={require('../photos/front_end.png')} style={styles.mapImage} />
            {frontBus.map(bus => (
              <Image
                key={'front-' + bus.id}
                source={bus.source}
                style={[
                  styles.busImage,
                  {
                    top: bus.top,
                    left: bus.left,
                    transform: [{ rotate: bus.rotation }],
                  },
                ]}
              />
            ))}
          </View>
        </ScrollView>

        {/* BACK END MAP WITH ZOOM & PAN */}
        <ScrollView
          style={styles.zoomWrapper}
          horizontal
          maximumZoomScale={3}
          minimumZoomScale={1}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          <View style={[styles.imageContainer, { width: 400 }]}>
            <Image source={require('../photos/back_end.png')} style={styles.mapImage} />
            {backBus.map(bus => (
              <Image
                key={'back-' + bus.id}
                source={bus.source}
                style={[
                  styles.busImage,
                  {
                    top: bus.top,
                    left: bus.left,
                    transform: [{ rotate: bus.rotation }],
                  },
                ]}
              />
            ))}
          </View>
        </ScrollView>

        {/* Button */}
  <Link href="../other (tabs)/bustracker" style={styles.button}>
    <Text style={styles.buttonText}>View Bus Tracker</Text>
  </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 50,
  },
  text: {
    color: '#000',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  zoomWrapper: {
    marginVertical: 10,
    maxHeight: 520,
  },
  imageContainer: {
    position: 'relative',
    height: 500,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    borderWidth: 10,
    borderColor: '#000',
    borderRadius: 20,
  },
  busImage: {
    position: 'absolute',
    width: 50,
    height: 30,
    resizeMode: 'contain',
    zIndex: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#d0b6b6ff',
    borderRadius: 20,
    width: 250,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#ff1e1eff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eagles: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 5,
    left: 10,
    zIndex: 9999,
    resizeMode: 'contain',
  },
});
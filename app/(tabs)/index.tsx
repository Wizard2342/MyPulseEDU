import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  PinchGestureHandler
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormData {
  username: string;
  password: string;
}

const randomSchedule = [
  { period: 1, subject: "Math" },
  { period: 2, subject: "English" },
  { period: 3, subject: "History" },
  { period: 4, subject: "Science" },
  { period: 5, subject: "PE" },
  { period: 6, subject: "Art" },
  { period: 7, subject: "Music" },
  { period: 8, subject: "Computer Sci" },
  { period: 9, subject: "Spanish" },
  { period: 10, subject: "Health" },
  { period: 11, subject: "Drama" },
  { period: 12, subject: "Free Period" },
];

export default function IndexScreen() {
  
  const { control, handleSubmit, reset } = useForm<FormData>();
  const [modalVisible, setModalVisible] = useState(false);
  const [activeFlyer, setActiveFlyer] = useState<any>(null);
  const scale = useSharedValue(1);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = 1;
    },
  });

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const flyers = [
    { id: "rotary", source: require("../photos/rotary.png") },
    { id: "march", source: require("../photos/marchflyer.png") },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = ({ username, password }: FormData) => {
    if (username === "user" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      Alert.alert("Error", "Invalid username or password.");
      reset();
    }
  };

  if (isLoggedIn) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Image source={require("../photos/ehslogo.png")} style={styles.ehsLogo} />
            <Text style={styles.headerText}>MyPulseEDU</Text>
            <View style={styles.welcomeBox}>
              <Text style={styles.welcomeText}>Welcome, User!</Text>
            </View>
          </View>

          {/* Fixed Announcement Box */}
          <View style={styles.fixedAnnouncements}>
            <Text style={styles.boxTitle}>Special Announcements</Text>
            <Text style={styles.boxContent}>🚨 Early dismissal at 1:30 PM today.</Text>
          </View>

          {/* Schedule */}
          <View style={styles.scheduleContainer}>
            <Text style={styles.boxTitle}>Todays Schedule</Text>
            <ScrollView style={styles.scheduleScroll}>
              {randomSchedule.map(({ period, subject }) => (
                <Text key={period} style={styles.scheduleText}>
                  Period {period}: {subject}
                </Text>
              ))}
            </ScrollView>
          </View>

          {/* Scrollable Body */}
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Weather Forecast */}
            <View style={styles.weatherBox}>
              <Text style={styles.boxTitle}>5-Day Forecast</Text>
              <View style={styles.weatherRow}>
                {[
                  { day: "Mon", icon: "☀️", high: "83°F", low: "65°F" },
                  { day: "Tue", icon: "🌤️", high: "79°F", low: "62°F" },
                  { day: "Wed", icon: "🌧️", high: "75°F", low: "60°F" },
                  { day: "Thu", icon: "⛅", high: "78°F", low: "61°F" },
                  { day: "Fri", icon: "☀️", high: "84°F", low: "66°F" },
                ].map((forecast, index) => (
                  <View style={styles.dayBox} key={index}>
                    <Text style={styles.dayText}>{forecast.day}</Text>
                    <Text>{forecast.icon}</Text>
                    <Text style={styles.tempText}>{forecast.high}</Text>
                    <Text style={styles.tempText}>{forecast.low}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Upcoming Events */}
            <View style={styles.announcementBox}>
              <Text style={styles.boxTitle}>Upcoming Events</Text>
              <Text style={styles.boxContent}>📚 First Day of School - September 6th</Text>
              <Text style={styles.boxContent}>🎉 EHS Homecoming - September 30th</Text>
            </View>

            {/* Reminders */}
            <View style={styles.announcementBox}>
              <Text style={styles.boxTitle}>Reminders</Text>
              <Text style={styles.boxContent}>🎯 Hit 2000 steps in Gym - Sept 15th</Text>
              <Text style={styles.boxContent}>🧑‍🏫 Meet with Mrs. Frey - Sept 24th</Text>
              <Text style={styles.boxContent}>📄 Soccer Form - October 1st</Text>
            </View>

            {/* Flyers */}
            <View style={styles.flyersRow}>
              {flyers.map(({ id, source }) => (
                <Pressable
                  key={id}
                  onPress={() => {
                    setActiveFlyer(source);
                    setModalVisible(true);
                  }}
                  style={styles.flyerWrapper}
                >
                  <Image source={source} style={styles.flyerSmall} />
                </Pressable>
              ))}
            </View>
          </ScrollView>

          {/* Zoom Modal */}
          <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalBackground}>
              <Pressable
                style={styles.modalContainer}
                onPress={() => {
                  setModalVisible(false);
                  setActiveFlyer(null);
                }}
              >
                <PinchGestureHandler onGestureEvent={pinchHandler}>
                  <Animated.Image
                    source={activeFlyer}
                    style={[styles.zoomedFlyer, animatedImageStyle]}
                  />
                </PinchGestureHandler>
              </Pressable>
            </View>
          </Modal>
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }

  // Login screen
  return (
    <View style={styles.container}>
       <Image source={require('../photos/ehslogo.png')} style={styles.ehsLogo} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Login Page</Text>
        </View>
      <Controller
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "##D3D3D3'",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  header: {
    width: '100%',
    height: 140,
    backgroundColor: '#ff1e1eff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 30,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  ehsLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  headerText: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeBox: {
    flex: 1,
    backgroundColor: '#ffcccc', // light red
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginLeft: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  fixedAnnouncements: {
    marginTop: 140,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    zIndex: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  scheduleContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 160, // fixed height to allow scroll inside
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  scheduleScroll: {
    marginTop: 8,
  },
  scheduleText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444',
  },
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  flyersRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40,
    gap: 15, // spacing between flyers; if gap unsupported, use marginHorizontal on flyerWrapper
  },
  flyerWrapper: {
    alignItems: 'center',
    marginHorizontal: 7,
  },
  flyerSmall: {
    width: 120,
    height: 160,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  weatherBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  weatherRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dayBox: {
    alignItems: 'center',
    width: 55,
  },
  dayText: {
    fontWeight: 'bold',
  },
  tempText: {
    fontSize: 12,
  },
  announcementBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxContent: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomedFlyer: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});


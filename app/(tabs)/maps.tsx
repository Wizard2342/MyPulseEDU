
import Floor1 from "@/assets/Floor1";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Map() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [destinationRoom, setDestinationRoom] = useState(null);
  const [showStartList, setShowStartList] = useState(false);
  const [showDestList, setShowDestList] = useState(false);

  const [listRooms,setListrooms] = useState([
    { id: "001", label: "001", name: "Room 001" },
  { id: "002", label: "002", name: "Room 002" },
  { id: "003", label: "003", name: "Room 003" },
  { id: "004", label: "004", name: "Room 004" },
  { id: "005", label: "005", name: "Room 005" },
  { id: "006", label: "006", name: "Room 006" },
  { id: "007", label: "007", name: "Room 007" },
  { id: "101A", label: "101A", name: "Room 101A" },
  { id: "101B", label: "101B", name: "Room 101B" },
  { id: "101C", label: "101C", name: "Room 101C" },
  { id: "102", label: "102", name: "Room 102" },
  { id: "103", label: "103", name: "Room 103" },
  { id: "104", label: "104", name: "Room 104" },
  { id: "191", label: "191", name: "Room 191" },
  { id: "192", label: "192", name: "Room 192" },
  { id: "193", label: "193", name: "Room 193" },
  { id: "194", label: "194", name: "Room 194" },
  { id: "195", label: "195", name: "Room 195" },
  { id: "196", label: "196", name: "Room 196" },
  { id: "197", label: "197", name: "Room 197" },
  { id: "105", label: "105", name: "Room 105" },
  { id: "107", label: "107", name: "Room 107" },
  { id: "108", label: "108", name: "Room 108" },
  { id: "109", label: "109", name: "Room 109" },
  { id: "110", label: "110", name: "Room 110" },
  { id: "111", label: "111", name: "Room 111" },
  { id: "112", label: "112", name: "Room 112" },
  { id: "113", label: "113", name: "Room 113" },
  { id: "114", label: "114", name: "Room 114" },
  { id: "115", label: "115", name: "Room 115" },
  { id: "116", label: "116", name: "Room 116" },
  { id: "117", label: "117", name: "Room 117" },
  { id: "118", label: "118", name: "Room 118" },
  { id: "119", label: "119", name: "Room 119" },
  { id: "120", label: "120", name: "Room 120" },
  { id: "121", label: "121", name: "Room 121" },
  { id: "122", label: "122", name: "Room 122" },
  { id: "123", label: "123", name: "Room 123" },
  { id: "124", label: "124", name: "Room 124" },
  { id: "125", label: "125", name: "Room 125" },
  { id: "126", label: "126", name: "Room 126" },
  { id: "127", label: "127", name: "Room 127" },
  { id: "128", label: "128", name: "Room 128" },
  { id: "129", label: "129", name: "Room 129" },
  { id: "131", label: "131", name: "Room 131" },
  { id: "132", label: "132", name: "Room 132" },
  { id: "134", label: "134", name: "Room 134" },
  { id: "135", label: "135", name: "Room 135" },
  { id: "136", label: "136", name: "Room 136" },
  { id: "137", label: "137", name: "Room 137" },
  { id: "138", label: "138", name: "Room 138" },
  { id: "139", label: "139", name: "Room 139" },
  { id: "140", label: "140", name: "Room 140" },
  { id: "141", label: "141", name: "Room 141" },
  { id: "142", label: "142", name: "Room 142" },
  { id: "143", label: "143", name: "Room 143" },

  { id: "Auto Shop", label: "Auto Shop", name: "Auto Shop" },
  { id: "Fitness Center", label: "Fitness Center", name: "Fitness Center" },
  { id: "Small Gym", label: "Small Gym", name: "Small Gym" },
  { id: "Big Gym", label: "Big Gym", name: "Big Gym" },
  { id: "Cafeteria", label: "Cafeteria", name: "Cafeteria" },
  { id: "Cafeteria Bathrooms", label: "Cafeteria Bathrooms", name: "Cafeteria Bathrooms" },
  { id: "2nd Front Enterance Bathrooms (front of 113)", label: "2nd Front Enterance Bathrooms (front of 113)", name: "2nd Front Enterance Bathrooms (front of 113)" },
  { id: "Down Stairs Science Wing Bathroom (front of 124)", label: "Down Stairs Science Wing Bathroom (front of 124)", name: "Down Stairs Science Wing Bathroom (front of 124)" },
  { id: "Language Wing Bathrooms", label: "Language Wing Bathrooms", name: "Language Wing Bathrooms" },
  { id: "Small Gym Bathrooms (next to 136)", label: "Small Gym Bathrooms (next to 136)", name: "Small Gym Bathrooms (next to 136)" },
  { id: "Guidance", label: "Guidance", name: "Guidance" },
  { id: "Security", label: "Security", name: "Security" },
  { id: "Attendance", label: "Attendance", name: "Attendance" },
  { id: "Main Office", label: "Main Office", name: "Main Office" },
  { id: "Auditorium", label: "Auditorium", name: "Auditorium" },
  { id: "Nurse", label: "Nurse", name: "Nurse" },
  { id: "Library", label: "Library", name: "Library" },
  { id: "Tech Room", label: "Tech Room", name: "Tech Room" },
  ]);


return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "##D3D3D3" }}
      contentContainerStyle={{ paddingBottom: 800 }}
    >
      <View>
        <Link 
        href="../other (tabs)/floor2page"
        style={{
            padding: 10,
            borderRadius: 8,
            alignItems: "flex-end",
            marginRight: 16,
            marginTop: 10,
            textAlign: "right",
  }}
        >Floor 2: Click Here </Link>
      </View>
      <SafeAreaView style={styles.screen}>
        {/* Floor 1 */}
        <Text style={styles.text}>Floor 1</Text>

        <TouchableOpacity
          style={styles.question1btnStyle}
          onPress={() => setShowStartList(!showStartList)}
        >
          <Text>
            {selectedRoom
              ? selectedRoom.name
              : "Which Room Do You Want to Start At?"}
          </Text>
          {/* <Image
            source={require("../assets/expand-button.png")}
            style={styles.down_arrow}
          /> */}
        </TouchableOpacity>
        {showStartList && (
          <View>
            {listRooms.map((room) => (
              <TouchableOpacity
                key={room.id}
                onPress={() => {
                  setSelectedRoom(room);
                  setShowStartList(false);
                }}
              >
                <Text style={styles.dropdownItem}>{room.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={styles.question2btnStyle}
          onPress={() => setShowDestList(!showDestList)}
        >
          <Text>
            {destinationRoom
              ? destinationRoom.name
              : "Which Room Do You Want to Go?"}
          </Text>
          {/* <Image
            source={require("../../assets/expand-button.png")}
            style={styles.down_arrow}
          /> */}
        </TouchableOpacity>

        {showDestList && (
          <View>
            {listRooms.map((room) => (
              <TouchableOpacity
                key={room.id}
                onPress={() => {
                  setDestinationRoom(room);
                  setShowDestList(false);
                }}
              >
                <Text style={styles.dropdownItem}>{room.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.overlayContainer}>
          <Image
            source={require("../../assets/flor1.png")}
            style={styles.backgroundImage}
            resizeMode="contain"
          />
          <View style={styles.svgWrapper}>
            <Floor1
              selectedId={selectedRoom?.id}
              destinationId={destinationRoom?.id}
              width="100%"
              height="100%"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "##D3D3D3",
    alignItems: "center",
  },
  overlayContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundImage: {
    width: 275,
    height: 275,
    aspectRatio: 3317 / 3273,
    zIndex: 0,
    alignItems: "center",
    transform: [{ translateX: 11 }, { translateY: 170 }],
  },
  svgWrapper: {
    position: "absolute",
    width: "90%",
    aspectRatio: 3317 / 3273,
    zIndex: 1,
    transform: [{ translateX: -20 }, { translateY: 132.5 }],
  },
  question1btnStyle: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 0.5,
    justifyContent: "space-between",
    transform: [{ translateX: 0 }, { translateY: 20 }],
    padding: 10,
    width: 300,
  },
  question1btnStyle2: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 0.5,
    justifyContent: "space-between",
    transform: [{ translateX: 0 }, { translateY: 700 }],
    padding: 10,
    width: 300,
  },
  question2btnStyle: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 0.5,
    justifyContent: "space-between",
    transform: [{ translateX: 0 }, { translateY: 60 }],
    padding: 10,
    width: 300,
  },
  down_arrow: {
    width: 20,
    height: 20,
    marginLeft: 10,
    alignSelf: "center",
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    width: 250,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    transform: [{ translateX: 0 }, { translateY: 4 }],
  }
});


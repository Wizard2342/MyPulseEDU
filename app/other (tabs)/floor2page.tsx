import Floor1 from "@/assets/Floor2";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [destinationRoom, setDestinationRoom] = useState(null);
  const [showStartList, setShowStartList] = useState(false);
  const [showDestList, setShowDestList] = useState(false);

   const [listRooms,setListrooms] = useState([
    { id: "201", label: "201", name: "Room 201" },
    { id: "202", label: "202", name: "Room 202" },
    { id: "203", label: "203", name: "Room 203" },
    { id: "204", label: "204", name: "Room 204" },
    { id: "205", label: "205", name: "Room 205" },
    { id: "206", label: "206", name: "Room 206" },
    { id: "207", label: "207", name: "Room 207" },
    { id: "208", label: "208", name: "Room 208" },
    { id: "209", label: "209", name: "Room 209" },
    { id: "210", label: "210", name: "Room 210" },
    { id: "211", label: "211", name: "Room 211" },
    { id: "212", label: "212", name: "Room 212" },
    { id: "213", label: "213", name: "Room 213" },
    { id: "214", label: "214", name: "Room 214" },
    { id: "215", label: "215", name: "Room 215" },
    { id: "216", label: "216", name: "Room 216" },
    { id: "217", label: "217", name: "Room 217" },
    { id: "219", label: "219", name: "Room 219" },
    { id: "220", label: "220", name: "Room 220" },
    { id: "221", label: "221", name: "Room 221" },
    { id: "222", label: "222", name: "Room 222" },
    { id: "223", label: "223", name: "Room 223" },
    { id: "224", label: "224", name: "Room 224" },
    { id: "225", label: "225", name: "Room 225" },
    { id: "226", label: "226", name: "Room 226" },
    { id: "227", label: "227", name: "Room 227" },
    { id: "228", label: "228", name: "Room 228" },
    { id: "229", label: "229", name: "Room 229" },
    { id: "230", label: "230", name: "Room 230" },
    { id: "231", label: "231", name: "Room 231" },
    { id: "232", label: "232", name: "Room 232" },
    { id: "233", label: "233", name: "Room 233" },
    { id: "234", label: "234", name: "Room 234" },
    { id: "235", label: "235", name: "Room 235" },
    { id: "236", label: "236", name: "Room 236" },
    { id: "237", label: "237", name: "Room 237" },
    { id: "239", label: "239", name: "Room 239" },
    { id: "251", label: "251", name: "Room 251" },
    { id: "254", label: "254", name: "Room 254" },
    { id: "256", label: "256", name: "Room 256" },
    { id: "151", label: "151", name: "Room 151" },
    { id: "153", label: "153", name: "Room 153" },
    { id: "154", label: "154", name: "Room 154" },
    {
      id: "Econ/Calc Wing Bathroom (next to 204)",
      label: "Econ/Calc Wing Bathroom (next to 204)",
      name: "Econ/Calc Wing Bathroom (next to 204)",
    },
    {
      id: "History Wing Bathrooms (next to Faculty Room)",
      label: "History Wing Bathrooms (next to Faculty Room)",
      name: "History Wing Bathrooms (next to Faculty Room)",
    },
    {
      id: "Math Wing Bathrooms (next to 219)",
      label: "Math Wing Bathrooms (next to 219)",
      name: "Math Wing Bathrooms (next to 219)",
    },
  ]);

return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#D3D3D3" }}
      contentContainerStyle={{ paddingBottom: 800 }}
    >
      <SafeAreaView style={styles.screen}>
        {/* Floor 1 */}
        <Text style={styles.text}>Floor 2</Text>

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
            source={require("../assets/expand-button.png")}
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
            source={require("../../assets/flor2.png")}
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
    width: 400,
  height: 400,
    aspectRatio: 3317 / 3273,
    zIndex: 0,
    alignItems: "center",
    transform: [{ translateX: 32.5 }, { translateY: 158 }],
  },
  svgWrapper: {
    position: "absolute",
    width: 400,
    height: 400,
    aspectRatio: 3317 / 3273,
    zIndex: 1,
    transform: [{ translateX: 20 }, { translateY: 150 }],
  },
  question1btnStyle: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 0.5,
    justifyContent: "space-between",
    padding: 10,
    width: 300,
    transform: [{ translateX: 0 }, { translateY: 30 }],
  },
  question1btnStyle2: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 0.5,
    justifyContent: "space-between",
    padding: 10,
    width: 300,
    transform: [{ translateX: 0 }, { translateY: 50 }],
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
    transform: [{ translateX: 0 }, { translateY: 11 }],
  }
});


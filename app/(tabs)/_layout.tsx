import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs
        screenOptions = {{
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
        }}
    >
        <Tabs.Screen 
        name="index" 
        options={{ 
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image source={require("../../assets/icons/home1.png")} style={{ width: 24, height: 24, opacity: focused ? 1 : 0.5 }} />
            ),
            }}
            />
        <Tabs.Screen name="maps" options={{ 
            title: "Maps",
            tabBarIcon: ({ focused }) => (
                <Image source={require("../../assets/icons/map1.png")} style={{ width: 24, height: 24, opacity: focused ? 1 : 0.5 }} />
            ),
            }} />
        <Tabs.Screen name="bus" options={{ 
            title: "Bus", 
            tabBarIcon: ({ focused }) => (
                <Image source={require("../../assets/icons/bus6.png")} style={{ width: 24, height: 24}} />
            ),
            }} />
        <Tabs.Screen name="bathroom" options={{ 
            title: "Bathroom",
            tabBarIcon: ({ focused }) => (
                <Image source={require("../../assets/icons/toilet.png")} style={{ width: 24, height: 24, opacity: focused ? 1 : 0.5 }} />
            ),
            }} 
            />
        <Tabs.Screen name="more" options={{ 
            title: "More",
            tabBarIcon: ({ focused }) => (
                <Image source={require("../../assets/icons/more1.png")} style={{ width: 24, height: 24, opacity: focused ? 1 : 0.5 }} />
            ),
            }} />
    </Tabs>
  );
}
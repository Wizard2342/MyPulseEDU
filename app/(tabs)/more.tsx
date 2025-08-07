import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function More() {
  const links = [
    { href: "../other (tabs)/extracurricular", label: "Extracurriculars" },
    { href: "../other (tabs)/calendar", label: "Calendar" },
    { href: "../other (tabs)/lunchmenu", label: "Lunch Menu" },
    { href: "../other (tabs)/lost&found", label: "Lost & Found" },
    { href: "../other (tabs)/resources", label: "Resources" },
  ];

  return (
    <View style={styles.container}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>{label}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#f0f0f5",
  },
  link: {
    marginVertical: 12,
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: "#ff1e1eff",
    borderRadius: 25,
    width: 220,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  linkText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

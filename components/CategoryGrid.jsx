import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CategoryGrid({ color, title }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPress]}
      >
        <View style={[styles.insideView, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 4,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  insideView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPress: {
    opacity: 0.5,
  },
});

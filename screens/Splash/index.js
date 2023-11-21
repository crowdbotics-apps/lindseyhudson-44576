import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Splash = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.HDAhERep} source={{
        uri: "https://media.licdn.com/dms/image/C4E16AQFxRIfYHBZbdg/profile-displaybackgroundimage-shrink_350_1400/0/1613189127113?e=1706140800&v=beta&t=l0OlHKi_eilcFz1QkIwARGPTWPhkIMcR_dYDxZQbF24"
      }} resizeMode="stretch"></ImageBackground><Text style={styles.BOVzhAQH}>{"Welcome to the Document Center!"}</Text><Text style={styles.ehGhcvoZ}>{"Document Center"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HDAhERep: {
    width: 329,
    height: 62
  },
  BOVzhAQH: {
    width: 327,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 292.5
  },
  ehGhcvoZ: {
    width: 327,
    height: 50,
    lineHeight: 14,
    fontSize: 25,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    color: "#00a493",
    position: "absolute",
    top: 100
  }
});
export default Splash;
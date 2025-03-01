import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, StatusBar, Platform } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function OnboardingScreen1({ handleNext }) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={require("../../assets/Background.png")} style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { paddingTop: insets.top + 12 }]}>

        <View style={styles.content}>
          <Text style={[styles.title, { fontWeight: "300" }]}>
            Welcome to <Text style={{ fontWeight: "600" }}>PlantApp</Text>
          </Text>
          <Text style={styles.description}>Identify more than 3000+ plants and 88% accuracy.</Text>
        </View>
        <Image source={require("../../assets/Frame13.png")} style={styles.image} />
        <View style={styles.content}>

          <Button contentStyle={styles.contentButton} mode="contained" onPress={handleNext} style={styles.button} labelStyle={styles.buttonLabel}>
            Get Started
          </Button>

          <Text style={styles.footerText}>
            By tapping next, you are agreeing to PlantID
          </Text>
          <Text style={styles.footerText}>
            <Text style={styles.linkText}>Terms of Use</Text> &
            <Text style={styles.linkText}> Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    // ios status bar

  },
  content: {
    width: "100%",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#13231B",
  },
  description: {
    fontSize: 16,
    color: "rgba(19, 35, 27, 0.7)",
    marginBottom: 24,
  },
  image: {
    width: "100%",
    resizeMode: "contain",

  },
  button: {
    width: "100%",
    backgroundColor: "#28AF6E",

    marginBottom: 17,
    borderRadius: 12,
  },
  contentButton: {
    height: 56
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  footerText: {
    fontSize: 11,
    color: "rgba(89, 113, 101, 0.7)",
    textAlign: "center",
  },
  linkText: {
    textDecorationLine: "underline",

  },
});

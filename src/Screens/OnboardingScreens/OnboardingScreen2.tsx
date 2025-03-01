import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, StatusBar, Platform } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenWidth } from "../../utils/sizeHelper";


export default function OnboardingScreen2({ handleNext }) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={require("../../assets/Background2.png")} style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { paddingTop: insets.top + 12 }]}>
        <View style={styles.content}>
          <Text style={[styles.title, { fontWeight: "500" }]}>
            Take a photo to <Text style={{ fontWeight: "800" }}>identify</Text>
          </Text>
          <View style={styles.descriptionView}>
            <Text style={[styles.title, { fontWeight: "500" }]}> the plant!</Text>
            <Image source={require("../../assets/Brush.png")} style={styles.brushImage} />
          </View>
        </View>
        <Image source={require("../../assets/Content.png")} style={styles.image} />
        <View style={styles.content2}>
          <Button contentStyle={styles.contentButton} mode="contained" onPress={handleNext} style={styles.button} labelStyle={styles.buttonLabel}>
            Continue
          </Button>
          <View>
            <View style={styles.dotsContainer}>
              <View style={styles.activeDot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
          </View>
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
  },
  content: {
    width: "100%",
    paddingHorizontal: 24,
    paddingRight: 48,
    marginBottom: 20
  },
  content2: {
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
    marginBottom: 12,
  },
  imageContainer: {

  },
  image: {
    width: "100%",
    resizeMode: "contain",
    height: screenWidth * 1.4,


  },
  button: {
    width: "100%",
    backgroundColor: "#28AF6E",
    marginBottom: 32.5,
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
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 100,
    backgroundColor: "rgba(19, 35, 27, 0.25)",
    margin: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(19, 35, 27, 1)",
    borderRadius: 100,
    margin: 4,
  },
  descriptionView: {
    flexDirection: "row", justifyContent: "space-between", marginLeft: 0, flex: 1
  },
  brushImage: {
    width: 136,
    height: 13,
    marginRight: 3
  }

});

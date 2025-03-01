import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen1 from "./OnboardingScreen1";
import OnboardingScreen2 from "./OnboardingScreen2";
import OnboardingScreen3 from "./OnboardingScreen3";
import OnboardingScreen4 from "./OnboardingScreen4";

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingPages = [
    OnboardingScreen1,
    OnboardingScreen2,
    OnboardingScreen3,
    OnboardingScreen4,
  ];

  async function completeOnboarding() {
    await AsyncStorage.setItem("onboardingCompleted", "true");
    navigation.replace("HomeBottomBar");
  }

  function handleNext() {
    if (currentIndex < onboardingPages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      completeOnboarding();
    }
  }

  const CurrentScreen = onboardingPages[currentIndex];

  return (
    <View style={styles.container}>
      <CurrentScreen handleNext={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

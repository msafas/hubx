import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Text, View } from "react-native";
import HomeBottomBar from "./HomeBottomBar";
import OnboardingScreen from "../Screens/OnboardingScreens/OnboardingScreens";
import { setOnboardingComplete } from "../Redux/Slice/onboardingSlice";


const Stack = createNativeStackNavigator();

export function AppRouter() {
  const dispatch = useDispatch();
  const isOnboardingComplete = useSelector(state => state.onboarding.isComplete);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const completed = await AsyncStorage.getItem("onboardingCompleted");
      dispatch(setOnboardingComplete(completed === "true"));
      setLoading(false);
    };

    checkOnboardingStatus();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
      {isOnboardingComplete ? (
        <Stack.Screen name="HomeBottomBar" component={HomeBottomBar} />
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
    </Stack.Navigator>
  );
}

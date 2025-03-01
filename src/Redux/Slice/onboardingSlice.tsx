import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: { isComplete: false },
  reducers: {
    setOnboardingComplete: (state, action) => {
      state.isComplete = action.payload;
      AsyncStorage.setItem("onboardingCompleted", action.payload ? "true" : "false");
    },
  },
});

export const { setOnboardingComplete } = onboardingSlice.actions;
export default onboardingSlice.reducer;


import { configureStore } from '@reduxjs/toolkit'
import onboardingReducer from './Slice/onboardingSlice'
import searchTextSlice from './Slice/searchTextSlice'
import questionsReducer from './Slice/questionsSlice'
import categoriesReducer from './Slice/categoriesSlice'


const store = configureStore({
    reducer: {
        onboarding: onboardingReducer,
        searchText: searchTextSlice,
        questions: questionsReducer,
        categories: categoriesReducer,
    }
})

export default store

import React, { useEffect } from 'react';
import { LogBox, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppThemeProvider } from './src/Contexts/AppThemeProvider';
import { ToastProvider } from './src/Contexts/ToastProvider';
import { AppRouter } from './src/Routers/AppRouter';
import { useTheme } from 'react-native-paper';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import store from './src/Redux/Store';
import { ConfigProvider } from './src/Contexts/ConfigProvider';


if (__DEV__) {
  // Disable logbox
  LogBox.ignoreAllLogs();
}


export default function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ConfigProvider>
            <AppThemeProvider>
              <AppContent />
            </AppThemeProvider>
        </ConfigProvider>
      </Provider>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  innerContainer: {
    flex: 1,

  }
});
function AppContent() {
  const theme = useTheme();
  return <View style={{
    ...styles.container,
    backgroundColor: theme.colors.background
  }}>
    <View style={styles.innerContainer}>

        <NavigationContainer >
          <ToastProvider>
            <AppRouter />
          </ToastProvider>
        </NavigationContainer>

    </View>
  </View >;
}
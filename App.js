import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/RouterComponent';
import store from './store';
import { Colors } from './src/utilities/Colors';

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <Provider store={store}>
      <Router />
    </Provider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.PrimaryAppColor,
  },
});
export default App;

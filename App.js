import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Router from './src/Router';
import { Colors } from './src/utilities/Colors';
import navigationService from './src/utilities/navigationService';
import LoadingView from './src/components/LoadingView';

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <Router ref={(navigatorRef) => { navigationService.setTopLevelNavigator(navigatorRef); }} />
    <LoadingView />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.PrimaryAppColor,
  },
});
export default connect(null, null)(App);

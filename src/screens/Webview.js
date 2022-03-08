import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from '../assets/css/MainStyleFile';
import Header from '../components/Header';

const Webview = props => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Header
        title="WebView"
        hasBackButton
        onBackPress={() => props.navigation.goBack()}
      />
      <Text>Webview</Text>
    </SafeAreaView>
  );
};

export default Webview;

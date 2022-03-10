import React from 'react';
import {SafeAreaView, Platform, Linking, Text} from 'react-native';
import styles from '../assets/css/MainStyleFile';
import Header from '../components/Header';
import {WebView} from 'react-native-webview';
import {url} from '../assets/constants/types.js';

const Webview = props => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Header
        title="WebView"
        hasBackButton
        onBackPress={() => props.navigation.goBack()}
      />
      {Platform.OS === 'ios' ? (
        <WebView source={{uri: url}} />
      ) : (
        <WebView source={{uri: url}} />
      )}
    </SafeAreaView>
  );
};

export default Webview;

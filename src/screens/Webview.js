import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from '../assets/css/MainStyleFile';
import Header from '../components/Header';
import {WebView} from 'react-native-webview';

const Webview = props => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Header
        title="WebView"
        hasBackButton
        onBackPress={() => props.navigation.goBack()}
      />
      <WebView source={{uri: 'https://google.com'}} style={{marginTop: 20}} />
    </SafeAreaView>
  );
};

export default Webview;

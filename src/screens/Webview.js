import React from 'react';
import {SafeAreaView, Platform, Text} from 'react-native';
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
      {Platform.OS === 'ios' ? (
        <WebView source={{uri: 'https://google.com'}} style={{marginTop: 20}} />
      ) : (
        <Text>Android</Text>
      )}
    </SafeAreaView>
  );
};

export default Webview;

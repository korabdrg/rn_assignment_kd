import React from 'react';
import {SafeAreaView, Platform, Linking, Text} from 'react-native';
import styles from '../assets/css/MainStyleFile';
import Header from '../components/Header';
import {WebView} from 'react-native-webview';

const Webview = props => {
  const url = 'https://google.com';

  return (
    <SafeAreaView style={styles.mainView}>
      <Header
        title="WebView"
        hasBackButton
        onBackPress={() => props.navigation.goBack()}
      />
      {Platform.OS === 'ios' ? (
        <WebView source={{uri: url}} style={{marginTop: 20}} />
      ) : (
        <Text>Android</Text>
      )}
    </SafeAreaView>
  );
};

export default Webview;

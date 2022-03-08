import React from 'react';
import {Text, View} from 'react-native';
import styles from '../assets/css/MainStyleFile';
const Header = props => {
  return (
    <View style={styles.headerView}>
      <Text onPress={props.onBackPress} style={styles.headerBackText}>
        {props.hasBackButton && 'Back'}
      </Text>
      <Text style={styles.headerTitleText}>{props.title}</Text>
      <View />
    </View>
  );
};

export default Header;

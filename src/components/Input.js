import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../assets/css/MainStyleFile';

const Input = props => {
  return (
    <View style={styles.singleInputView}>
      <Text style={styles.singleInputText}>{props.title}</Text>
      <TextInput
        onChangeText={props.onChange}
        style={styles.input}
        editable
        value={props.value}
        maxLength={2}
        keyboardType={'numeric'}
      />
    </View>
  );
};

export default Input;

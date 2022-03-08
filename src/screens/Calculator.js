import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import styles from '../assets/css/MainStyleFile';
import Input from '../components/Input';
import operators from '../assets/constants/types';
import Header from '../components/Header';

const Calculator = props => {
  const [firstInput, setFirstInput] = useState(null);
  const [secondInput, setSecondInput] = useState(null);
  const [result, setResult] = useState(null);

  const onChangeHandler = (event, order) => {
    if (order === 'first') {
      setFirstInput(event);
    } else {
      setSecondInput(event);
    }
  };

  const onSubmitHandler = () => {
    Keyboard.dismiss();
    let selectedOperator = Math.floor(Math.random() * operators.length);
    if (firstInput && secondInput) {
      setResult(
        'The result is: ' +
          operators[selectedOperator].method(
            parseInt(firstInput),
            parseInt(secondInput),
          ) +
          `\n The operator used was '${operators[selectedOperator].sign}'`,
      );
    } else {
      setResult("Inputs can't be empty");
    }
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Header title="Calculator" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.bigView}>
          <View style={styles.inputView}>
            <Input
              onChange={event => onChangeHandler(event, 'first')}
              value={firstInput}
              title="Enter the first number"
            />
            <Input
              onChange={event => onChangeHandler(event, 'second')}
              value={secondInput}
              title="Enter the second number"
            />
          </View>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => onSubmitHandler()}>
            <Text style={styles.calculateText}>Calculate</Text>
          </Pressable>
          {result && <Text style={styles.resultText}>{result}</Text>}
          <Text
            style={styles.goToWebviewText}
            onPress={() => props.navigation.navigate('Webview')}>
            Go to WebView
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Calculator;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputView: {
    justifyContent: 'space-between',
    padding: 2,
    alignItems: 'center',
  },
  singleInputView: {
    flexDirection: 'column',
    marginBottom: 30,
    width: '50%',
  },
  singleInputText: {
    marginBottom: 5,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  mainView: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  resultText: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    color: '#333333',
  },
  buttonStyle: {
    backgroundColor: '#34B6F2',
    borderRadius: 5,
    padding: 8,
    width: '40%',
    alignSelf: 'center',
  },
  calculateText: {
    textAlign: 'center',
    color: '#333333',
  },
  bigView: {
    flex: 1,
    justifyContent: 'center',
  },
  goToWebviewText: {
    color: 'red',
    fontSize: 15,
    marginRight: 30,
    margin: 30,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  headerView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  headerBackText: {
    alignSelf: 'center',
  },
  headerTitleText: {
    alignSelf: 'center',
  },
});

export default styles;

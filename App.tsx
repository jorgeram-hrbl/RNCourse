import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import CalcButton from './calc-button';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>0</Text>
        </View>
        <View style={styles.buttons}>
          <CalcButton
            style={styles.button}
            titleStyle={styles.acTitleStyle}
            title="AC"
          />
          <CalcButton style={styles.button} title="<" />
          <CalcButton style={styles.button} title="%" />
          <CalcButton style={styles.button} title="/" />
          <CalcButton style={styles.button} title="7" />
          <CalcButton style={styles.button} title="8" />
          <CalcButton style={styles.button} title="9" />
          <CalcButton style={styles.button} title="X" />
          <CalcButton style={styles.button} title="4" />
          <CalcButton style={styles.button} title="5" />
          <CalcButton style={styles.button} title="6" />
          <CalcButton style={styles.button} title="-" />
          <CalcButton style={styles.button} title="1" />
          <CalcButton style={styles.button} title="2" />
          <CalcButton style={styles.button} title="3" />
          <CalcButton style={styles.button} title="+" />
          <CalcButton style={styles.button} title=" " />
          <CalcButton style={styles.button} title="0" />
          <CalcButton style={styles.button} title="." />
          <CalcButton style={styles.button} title="=" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  display: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },
  displayText: {
    textAlign: 'right',
    backgroundColor: 'white',
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
  },
  acTitleStyle: {
    fontSize: 25,
  },
  button: {
    width: '22%',
    margin: 5,
  },
});

export default App;

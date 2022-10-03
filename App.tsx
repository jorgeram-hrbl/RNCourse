import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CalcButton from './calc-button';

const App = () => {
  // let valor = 10;
  // let operator = '';
  const totalRef = useRef(0);
  const operatorRef = useRef('');
  const [value, setValue] = useState('0');

  const onAcPress = () => {
    totalRef.current = 0;
    operatorRef.current = '';
    setValue('0');
  };

  const onNumPress = (title: string) => {
    if (title === '.' && value.includes('.')) {
      return;
    }
    if (operatorRef.current !== '' && operatorRef.current !== '.') {
      setValue(title);
    } else if (value === '0' && title === '.') {
      setValue('0.');
    } else if (value !== '0') {
      setValue(value + title);
    } else {
      setValue(title);
    }
  };

  const onOpPress = (title: string) => {
    operatorRef.current = title;
    console.log(`---> operatorRef: ${operatorRef.current}`);
  };

  const onTotalPress = () => {
    let result = 0;
    if (operatorRef.current === '+') {
      result = totalRef.current + parseFloat(value);
    } else if (operatorRef.current === '-') {
      result = totalRef.current - parseFloat(value);
    } else if (operatorRef.current === '*') {
      result = totalRef.current * parseFloat(value);
    } else if (operatorRef.current === '/') {
      result = totalRef.current / parseFloat(value);
    }
    setValue(result.toString());
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{value}</Text>
        </View>
        <View style={styles.buttons}>
          <CalcButton
            onPress={onAcPress}
            style={styles.buttonAc}
            titleStyle={styles.acTitleStyle}
            title="AC"
          />
          <CalcButton style={styles.buttonOp} title="<" />
          <CalcButton style={styles.buttonOp} title="%" />
          <CalcButton onPress={onOpPress} style={styles.buttonOp} title="/" />
          <CalcButton onPress={onNumPress} style={styles.button} title="7" />
          <CalcButton onPress={onNumPress} style={styles.button} title="8" />
          <CalcButton onPress={onNumPress} style={styles.button} title="9" />
          <CalcButton onPress={onOpPress} style={styles.buttonOp} title="X" />
          <CalcButton onPress={onNumPress} style={styles.button} title="4" />
          <CalcButton onPress={onNumPress} style={styles.button} title="5" />
          <CalcButton onPress={onNumPress} style={styles.button} title="6" />
          <CalcButton onPress={onOpPress} style={styles.buttonOp} title="-" />
          <CalcButton onPress={onNumPress} style={styles.button} title="1" />
          <CalcButton onPress={onNumPress} style={styles.button} title="2" />
          <CalcButton onPress={onNumPress} style={styles.button} title="3" />
          <CalcButton onPress={onOpPress} style={styles.buttonOp} title="+" />
          <CalcButton disabled={true} style={styles.button} title=" " />
          <CalcButton onPress={onNumPress} style={styles.button} title="0" />
          <CalcButton onPress={onNumPress} style={styles.button} title="." />
          <CalcButton
            onPress={onTotalPress}
            style={styles.buttonEq}
            titleStyle={styles.buttonEqTitle}
            title="="
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#404040',
  },
  container: {},
  display: {
    marginTop: 40,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
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
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 20,
    margin: 20,
    marginTop: 0,
  },
  acTitleStyle: {
    fontSize: 18,
  },
  button: {
    width: '21%',
    margin: 5,
  },
  buttonOp: {
    backgroundColor: 'orange',
    width: '21%',
    margin: 5,
  },
  buttonAc: {
    backgroundColor: 'red',
    width: '21%',
    margin: 5,
  },
  buttonEq: {
    backgroundColor: 'yellow',
    width: '21%',
    margin: 5,
  },
  buttonEqTitle: {
    color: 'gray',
  },
});

export default App;

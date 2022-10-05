import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Button from './button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} title="Validar" />
        <Button style={styles.button} title="Limpiar" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#505050',
    flex: 1,
  },
  formContainer: {
    marginTop: 40,
    backgroundColor: 'dimgray',
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 10,
    paddingHorizontal: 40,
    paddingBottom: 50,
    borderRadius: 10,
  },
  textInput: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    padding: 5,
    borderBottomColor: 'darkgray',
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default App;

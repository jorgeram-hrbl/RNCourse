import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from './button';

type ErrorInputs = 'name' | 'email' | 'phone';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [errorInp, setErrorInp] = useState<ErrorInputs | undefined>();

  const onValidar = useCallback(() => {
    if (name.length < 3) {
      setErrorMsg('Invalid Name');
      setErrorInp('name');
    } else if (!email.includes('@')) {
      setErrorMsg('Invalid Email');
      setErrorInp('email');
    } else if (phone.length < 10 || !phone.match(/^\d+$/)) {
      setErrorMsg('Invalid phone');
      setErrorInp('phone');
    } else {
      setErrorMsg('');
      setErrorInp(undefined);
    }
  }, [name, email, phone]);

  const onLimpiar = () => {
    setName('');
    setEmail('');
    setPhone('');
    setErrorMsg('');
    setErrorInp(undefined);
  };

  useEffect(() => {
    if (name.length > 0) {
      onValidar();
    }
  }, [name, email, phone, onValidar]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
      <View style={styles.formContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={[styles.textInput, errorInp === 'name' && styles.textInputErr]}
          placeholder="Name"
          placeholderTextColor={'gray'}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[
            styles.textInput,
            errorInp === 'email' && styles.textInputErr,
          ]}
          placeholder="Email"
          placeholderTextColor={'gray'}
        />
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={[
            styles.textInput,
            errorInp === 'phone' && styles.textInputErr,
          ]}
          placeholder="Phone"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} title="Validar" onPress={onValidar} />
        <Button style={styles.button} title="Limpiar" onPress={onLimpiar} />
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
  textInputErr: {
    color: 'salmon',
    borderBottomColor: 'salmon',
  },
  errorContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'salmon',
    fontSize: 16,
    fontWeight: '500',
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

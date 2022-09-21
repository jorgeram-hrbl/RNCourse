import React from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  Alert,
} from 'react-native';
import MyButton from './my-button';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'gray' : 'white',
  };

  const pressHandler = () => {
    console.log('pressHadler');
    Alert.alert('Haz presionado');
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Text style={styles.saludo}>Hola</Text>
        <MyButton
          style={styles.buttonSize}
          label="Presiona aqui"
          onPress={pressHandler}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  saludo: {
    fontSize: 20,
    fontWeight: '500',
  },
  buttonSize: {
    marginLeft: 20,
    marginTop: 20,
    width: '50%',
  },
});

export default App;

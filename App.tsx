import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MyClassForm from './MyClassForm';
import MyForm from './MyForm';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
      <MyClassForm />
      <MyForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#505050',
    flex: 1,
  },
});

export default App;

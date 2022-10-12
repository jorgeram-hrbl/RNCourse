import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from './button';
import styles from './MyClassForm.style';

type ErrorInputs = 'name' | 'email' | 'phone';

interface MyFormState {
  name: string;
  email: string;
  phone: string;
  errorMsg: string;
  errorInp: ErrorInputs | undefined;
}

class MyClassForm extends React.PureComponent<{}, MyFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      errorMsg: '',
      errorInp: undefined,
    };
    // this.componentDidUpdate.bind(this);
  }

  onValidar = () => {
    const {name, email, phone} = this.state;
    if (name.length < 3) {
      this.setState({
        errorMsg: 'Invalid Name',
        errorInp: 'name',
      });
    } else if (!email.includes('@')) {
      this.setState({
        errorMsg: 'Invalid Email',
        errorInp: 'email',
      });
    } else if (phone.length < 10 || !phone.match(/^\d+$/)) {
      this.setState({
        errorMsg: 'Invalid phone',
        errorInp: 'phone',
      });
    } else {
      this.setState({
        errorMsg: '',
        errorInp: undefined,
      });
    }
  };

  onLimpiar = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      errorMsg: '',
      errorInp: undefined,
    });
  };

  setName = (name: string) => {
    this.setState({name});
  };

  setEmail = (email: string) => {
    this.setState({email});
  };

  setPhone = (phone: string) => {
    this.setState({phone});
  };

  componentDidMount() {
    console.log('MyClassForm loaded');
  }

  componentWillUnmount() {
    console.log('MyClassForm unloaded');
  }

  componentDidUpdate(_props: {}) {
    this.onValidar();
  }

  render() {
    const {name, phone, email, errorMsg, errorInp} = this.state;

    return (
      <>
        <View style={styles.formContainer}>
          <TextInput
            value={name}
            onChangeText={this.setName}
            style={[
              styles.textInput,
              errorInp === 'name' && styles.textInputErr,
            ]}
            placeholder="Name"
            placeholderTextColor={'gray'}
          />
          <TextInput
            value={email}
            onChangeText={this.setEmail}
            style={[
              styles.textInput,
              errorInp === 'email' && styles.textInputErr,
            ]}
            placeholder="Email"
            placeholderTextColor={'gray'}
          />
          <TextInput
            value={phone}
            onChangeText={this.setPhone}
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
          <Button
            style={styles.button}
            title="Validar"
            onPress={this.onValidar}
          />
          <Button
            style={styles.button}
            title="Limpiar"
            onPress={this.onLimpiar}
          />
        </View>
      </>
    );
  }
}

export default MyClassForm;

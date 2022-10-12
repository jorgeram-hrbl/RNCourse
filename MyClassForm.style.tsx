import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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

export default styles;

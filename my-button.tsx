import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface MyButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.mybutton, props.style]}
      onPress={props.onPress}>
      <Text style={styles.mybutton_label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mybutton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  mybutton_label: {
    color: 'black',
  },
});

export default MyButton;

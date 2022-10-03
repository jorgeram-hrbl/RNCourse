import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface CalcButtonProps {
  title: string;
  onPress?: (title: string) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const CalcButton = (props: CalcButtonProps) => {
  const onPress = () => props.onPress && props.onPress(props.title);
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={onPress}
      disabled={props.disabled}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(50, 50, 50)',
    aspectRatio: 0.7,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default CalcButton;

import React from 'react';

import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyIcon from '../TouchableIcon.js/MyIcon';
import { colors } from '../../../styles/colors';

import InputStyle from './InputStyle';

const Input = ({
  placeholder = 'Type something',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName="pluscircle",
  onIconPress=()=>{},
  value="",
  onChangeText=()=>{}
}) => {
  return (
    <View style={InputStyle.InputBox}>
      <TextInput
        keyboardType={keyboardType}
        style={InputStyle.input}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
     <MyIcon iconName="add-circle" onIconPress={onIconPress} color={colors.bgPrimary} size={30}/>
      )}
    </View>
  );
};
export default Input;

import React from 'react';

import {

  StyleSheet,
  Text,

  View,
} from 'react-native';

import AppBarStyle from './AppBarStyle.js'



function AppBar({title="My To Do App"}){
return(
    <View style={AppBarStyle.AppBarBox}><Text style={AppBarStyle.AppBarText}>{title}</Text></View>
)
}
export default AppBar
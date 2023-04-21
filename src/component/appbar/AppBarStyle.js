
import React from 'react';

import {

  StyleSheet,
  Text,

  View,
} from 'react-native';
import { colors } from '../../../styles/colors';




const AppBarStyle=StyleSheet.create({
    AppBarBox:{
        width:"100%",
        height:50,
        backgroundColor: colors.bgPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AppBarText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.textSeondary
    }
})

export default AppBarStyle
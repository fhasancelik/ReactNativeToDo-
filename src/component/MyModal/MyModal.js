import React from 'react';

import {View, TextInput, TouchableOpacity, Modal, Text} from 'react-native';

import MyIcon from '../TouchableIcon.js/MyIcon';
import {colors} from '../../../styles/colors';

import MyModalStyle from './MyModalStyle';

function MyModal({closeModal, visible, oldtodo,onConfirm,      willEditTodo,
  setWillEditTodo,
  error,
  errorMessage,
  willEditText,
  setWillEditText,

}) {

  
  return (
    <Modal  visible={visible} transparent>
  <View style={MyModalStyle.modalContainer}>
  <View style={MyModalStyle.modalContentWrapper}>
       
       <Text style={MyModalStyle.title}>You Can Edit Your Todo:</Text>
       <Text>{oldtodo}</Text>
       <TextInput placeholder="Edit Todo" value={willEditText} onChangeText={(text)=>setWillEditText(text)} />
{
  error && (<Text style={MyModalStyle.validationText}>{errorMessage}</Text>)
}

       <View style={MyModalStyle.buttonsWrapper}>
         <TouchableOpacity
           onPress={closeModal}
           style={MyModalStyle.closeButtonWrapper}>
           <Text style={MyModalStyle.closeButtonText}>Kapat</Text>
         </TouchableOpacity>
         <TouchableOpacity
           onPress={onConfirm}
           style={MyModalStyle.confirmButtonWrapper}>
           <Text style={MyModalStyle.confirmButtonText}>Onayla</Text>
         </TouchableOpacity>
       </View>
   </View>
  </View>
    </Modal>
  );
}

export default MyModal;

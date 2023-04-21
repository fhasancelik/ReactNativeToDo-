import React, {useState} from 'react';

import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import MyIcon from '../TouchableIcon.js/MyIcon.js';
import {colors} from '../../../styles/colors.js';
import MyModal from '../MyModal/MyModal.js';

import TodoCardStyle from './TodoCardStyle.js';
function TodoCard({todoContent = {}, todos = [], setTodos = () => {}}) {
  const [modalVisible, setModalVisible] = useState(false);
  const[willEditTodo,setWillEditTodo]=useState(todoContent.text)
  const[willEditText,setWillEditText]=useState("")
  const [error,setError]=useState(false)
  const [errorMessage,setErrorMessage]=useState("")

  function deleteTodo() {
    Alert.alert(
      'Delete Todo',
      `${todoContent.id} Id 'li Todoyu Silmek Siter misin`,
      [
        {
          text: 'Vazgeç',
        },
        {
          text: 'Ok',
          onPress: () => {
            const filterTodo = todos.filter(item => item.id !== todoContent.id);
            setTodos(filterTodo);
          },
        },
      ],
    );
  }

  function markedTodo() {
    Alert.alert('Tamamlandı', `${todoContent.id} li todo`, [
      {
        text: 'vazgeç',
        onPress: () => {},
      },
      {
        text: 'tamam',
        onPress: () => {
          const markedArray = [];


          todos.map(todom => {
            if (todom.id !== todoContent.id) {
              markedArray.push(todom);
            } else {
              let newtodo = {
                ...todoContent,
                complate: !todoContent.complate,
              };
              markedArray.push(newtodo);
            }
          });

          setTodos(markedArray);
        },
      },
    ]);
  }

function editTodo(){
  if(willEditText===""){
    console.log("alan boş")
    setError(true),
    setErrorMessage("Text Alanını Doldurunuz")
   setTimeout(()=>{
setError(false)
setErrorMessage("")

   },2000)
return
    }

    let editArray=[]

    todos.map((editTodo)=>{
      if(editTodo.id !== todoContent.id){
        editArray.push(editTodo)
      }else{
        let editedTodo={
          ...editTodo,
          text:willEditText
        }
        editArray.push(editedTodo)
      }
      setTodos(editArray)
      setModalVisible(false)
    })

  }




  return (
    <View style={TodoCardStyle.todoWrapper}>
      <View>
        <Text style={TodoCardStyle.title}>{todoContent?.text}</Text>
        <Text style={TodoCardStyle.date}>
          {new Date(todoContent?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={TodoCardStyle.iconsWrapper}>
        <MyIcon
          iconName={
            todoContent?.complate
              ? 'checkmark-circle'
              : 'checkmark-circle-outline'
          }
          color={colors.green}
          size={25}
          onIconPress={() => markedTodo()}
        />
        <MyIcon
          iconName="create"
          color={colors.edit}
          size={25}
          onIconPress={() => setModalVisible(true)}
        />
        <MyIcon
          iconName="trash"
          color={colors.danger}
          size={25}
          onIconPress={() => deleteTodo()}
        />








              <MyModal
              willEditTodo={willEditTodo}
              setWillEditTodo={setWillEditTodo}
              error={error}
              errorMessage={errorMessage}
        visible={modalVisible}
        closeModal={() => {
          setModalVisible(false);
        }}
      
      oldtodo={willEditTodo}
      onConfirm={()=>{editTodo()}}
      willEditText={willEditText}
      setWillEditText={setWillEditText}
      />
      </View>

    </View>
  );
}

export default TodoCard;

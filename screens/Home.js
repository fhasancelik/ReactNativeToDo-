import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Input from '../src/component/input/Input';
import mainstyles from '../styles/mainstyles';
import {colors} from '../styles/colors';

import TodoCard from '../src/component/todo/TodoCard';

function HomeScreen() {
  const [text, SetText] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = {
      id: String(new Date().getTime()),
      date: new Date(),
      text: text,
      complate: false,
    };

    setTodos([...todos, newTodo]);

    SetText('');
  }

  return (
    <View style={mainstyles.flex1}>
      <Input
        onIconPress={() => {
          addTodo();
        }}
        value={text}
        onChangeText={text => SetText(text)}
        placeholder="Type Here"
        hasIcon={true}
        iconName="add-circle"
      />
      <View style={styles.todosWrapper}>
        {todos == 0 ? (
          <Text style={styles.emptyText}>
            Henüz Kayıtlı Bir Todo Bulunmamaktadır
          </Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {todos?.map(todo => (
              <TodoCard todos={todos} setTodos={setTodos} todoContent={todo} key={todo?.id} />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  scrollView: {
    flexGrow: 1,
  },
});
export default HomeScreen;

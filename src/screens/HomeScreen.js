import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now().toString(), text: todo }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <MainLayout>
      <ToDoForm onAddTodo={addTodo} />
      <ToDoList todos={todos} onDeleteTodo={deleteTodo} />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
          color="#f4511e"
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;

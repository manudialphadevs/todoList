import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NewTask = ({ navigation }) => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [DueDate, setDueDate] = useState('');
  const [Status, setStatus] = useState(true);
  const [tasks, setTasks] = useState([]);

  const [date, setDate] = useState(new Date());

  const saveTasksToStorage = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks: ', error);
    }
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
    }
  };

  const handleSubmit = () => {
    const newTask = {  
      title: Title,
      description: Description,
      dueDate: DueDate,
      status: Status,
    };
    tasks.push({
      title: Title,
      Description: Description,
      dueDate: DueDate,
      status: Status,
    });
    handleCancel();
    saveTasksToStorage();
    console.log(tasks)
  };
  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Task</Text>
      <Text style={styles.inputText}>Title:</Text>
      <TextInput style={styles.input} value={Title} onChangeText={text => setTitle(text)} placeholder="Enter Title" />

      <Text style={styles.inputText}>Description:</Text>
      <TextInput style={styles.input} value={Description} onChangeText={text => setDescription(text)} placeholder="Enter Description" />
      <Text style={styles.inputText}>DueDate:</Text>
      <TextInput style={styles.input} value={DueDate} onChangeText={number => setDueDate(number)} placeholder="dd/mm/yyyy" />
      

      <DateTimePicker mode="date" display="spinner" value={date} onChange={onChange} />

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.Btn} onPress={handleSubmit}>
          <Text style={styles.btnTextStyle}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={handleCancel}>
          <Text style={styles.btnTextStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={styles.btnTextStyle}>Tab Navigator</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'center',
    paddingTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  inputText: {
    fontSize: 18,
    paddingTop: 20,
    fontWeight: 400,
    marginLeft: 15,
  },
  Btn: {
    padding: 10,
    backgroundColor: '#8f22cb',
    marginTop: 40,
    width: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8f22cb',
    marginTop: 40,
    paddingVertical: 8,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
     
  },
  btnView: {
    marginHorizontal: 25,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default NewTask;

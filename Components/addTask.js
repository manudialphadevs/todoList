import React, { useState } from 'react';
import { Button,View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import registerNNPushToken from 'native-notify';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const NewTask = ({ navigation }) => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [DueDate, setDueDate] = useState('');
  const [Status] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  registerNNPushToken(14853, '0jPGABU9DkdPM1Zoi1vhqx');
  const saveTasksToStorage = async () => {
    try {
      let menuItems = localStorage.getItem("tasks") || '[]';
      menuItems = JSON.parse(menuItems); 
      menuItems.push(tasks);
      console.log("menuitems",menuItems)
      AsyncStorage.setItem("tasks", JSON.stringify(menuItems));
      // const jdata=JSON.stringify(tasks);
      // console.log("jdata:",jdata)
      // await AsyncStorage.setItem('keys', jdata);
      // console.log(AsyncStorage.getItem())
    } catch (error) {
      console.error('Error saving tasks: ', error);
    }
  };

  const handleSubmit = () => {
    tasks.push({
      title: Title,
      Description: Description,
      dueDate: DueDate,
      status: Status,
    });
    console.log("task:",tasks);

    handleCancel()
    saveTasksToStorage();
    console.log("task:",tasks);
    console.log( JSON.stringify(tasks))
    

  };
  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
  };


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDueDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Task</Text>
      <Text style={styles.inputText}>Title:</Text>
      <TextInput style={styles.input} value={Title} onChangeText={text => setTitle(text)} placeholder="Enter Title" />

      <Text style={styles.inputText}>Description:</Text>
      <TextInput style={styles.input} value={Description} onChangeText={text => setDescription(text)} placeholder="Enter Description" />
      <Text style={styles.inputText}>DueDate:</Text>
      <TouchableOpacity style={styles.datebtn} onPress={showDatePicker}>
          <Text style={{color:'white'}}>Due Date</Text>
        </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.Btn} onPress={handleSubmit}>
          <Text style={styles.btnTextStyle}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={handleCancel}>
          <Text style={styles.btnTextStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={{}}>Tab Navigator</Text>
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
    // fontWeight: 700,
    textAlign: 'center',
    paddingTop: 20,
  },
  input: {
    backgroundColor:'white',
    height: 40,
    margin: 12,
    border: '#ab25ab',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  inputText: {
    fontSize: 18,
    paddingTop: 20,
    // fontWeight: 400,
    marginLeft: 15,
  },
  Btn: {
    padding: 10,
    backgroundColor: '#083c33',
    marginTop: 40,
    width: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#083c33',
    marginTop: 40,
    paddingVertical: 8,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
     
  },
  datebtn:{
    marginLeft: 115,
    padding: 10,
    backgroundColor: 'grey',
    marginTop: 40,
    width: 100,
    borderRadius:5
    },
  btnView: {
    marginHorizontal: 25,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default NewTask;

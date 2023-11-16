import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pending = () => {
  const [tasks, setTasks] = useState([]);
  const [currentDate, setcurrentDate] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const wait = timeout => {
    // Defined the timeout function for testing purpose
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setcurrentDate(date + '/' + month + '/' + year);
    retrieveTasksFromStorage();
  }, [filteredTasks]);

  const retrieveTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error retrieving tasks: ', error);
    }
  };
  const filteredTasks = tasks.filter(task => task.status === true);
  const filteredTasksd = tasks.filter(task => task.dueDate < currentDate);
  console.log('filters', filteredTasksd);

  const handleCompleted = index => {
    const updatedTasks = [...tasks];
    console.log(updatedTasks);
    updatedTasks[index].status = false;
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    // Assuming 'status' represents the completion status
    setTasks(updatedTasks);
    // registerNNPushToken(14853, '0jPGABU9DkdPM1Zoi1vhqx');
  };
  console.log(filteredTasks);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('tasks');
    } catch (e) {
      // remove error
    }
    console.log('Done.');
  };
  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <Text >today:{currentDate}</Text>
        {filteredTasks.length === 0 ? 
        <Text style={styles.textMsg}>No items to display. Please press “Add” to add new items.”</Text> 
        : 
        <FlatList
          keyExtractor={item => item.Description}
          data={filteredTasks}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          renderItem={({ item, index }) => (
            <View style={styles.tab}>
              <View>
                <Text style={styles.text}>Title: {item.title}</Text>
                <Text style={styles.text}>Description: {item.Description}</Text>
                <Text style={styles.text}>Deadline: {item.dueDate}</Text>
              </View>
              <View style={styles.btnView}>
                <TouchableOpacity>
                  <FontAwesome style={{ fontSize: 19, color: 'green' }} name="edit" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome style={{ fontSize: 19, color: 'red' }} name="trash" onPress={removeValue} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome style={{ fontSize: 19, color: 'blue' }} name="check" onPress={() => handleCompleted(index)} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
          }
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  tab: {
    marginTop: 20,
    backgroundColor: 'white',
    width: 300,
    height: 90,
    borderRadius: 7,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    // fontWeight: 800,
    fontSize: 15,
  },
 
  textMsg:{
    color: 'red',
    // fontWeight: 800,
    fontSize: 15, 
    padding:80,
    textAlign:'center'
  },
 
  Btn: {
    padding: 10,
    backgroundColor: '#3F51B5',
    marginTop: 40,
    width: 100,
  },
  btnView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});
export default Pending;

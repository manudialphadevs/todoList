import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Completed = () => {
  const [tasks, setTasks] = useState([]);
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
    retrieveTasksFromStorage();
  }, []);

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

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('tasks')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  const filteredTasks = tasks.filter(task => task.status === false);
  console.log('filterdertasks', filteredTasks);

  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          keyExtractor={item => item.Description}
          data={filteredTasks}
          refreshing={isRefreshing} // Added pull to refesh state
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
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
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
  btnView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});
export default Completed;

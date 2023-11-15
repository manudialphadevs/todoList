import React,{ useState} from 'react';
import { View,Text,TextInput, TouchableOpacity,StyleSheet,} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const Hi = ({navigation}) =>{
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [tasks] = useState([]);
    
    const [date, setDate] = useState(new Date());

    const onChange = ({ type },selectedDate) =>{
        if (type == "set") {
             const currentDate =selectedDate; 
             setDate (currentDate);
        }}
   
    const handleSubmit = () => {
        const newTask = {
            title: Title,
            description: Description,
          };
          tasks.push({
            title:Title,
            Description:Description
          });
          console.log(tasks);

        setTitle(Title);
        setDescription(Description);
        navigation.navigate("Pending", {
            array:tasks
          })

    };
    const handleCancel = () => {
        setTitle('');
        setDescription('');

      };
    return (
      <View style= {styles.container}>
          <Text style={styles.heading}>Add Task</Text>
        <Text style= {styles.inputText}>Title:</Text>
        <TextInput
        style={styles.input}
          value={Title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Enter Title"
        />
  
        <Text style= {styles.inputText}>Description:</Text>
        <TextInput
        style={styles.input}
          value={Description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter Description"
        />
        <Text style= {styles.inputText}>DueDate:</Text>

       <DateTimePicker
       mode="date"
       display='spinner'
       value={date}
       onChange={onChange}/>

   <View style={styles.btnView}>
     <TouchableOpacity style={styles.Btn}  onPress={handleSubmit} >
          <Text style={styles.btnTextStyle}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}  onPress={handleCancel} >
          <Text style={styles.btnTextStyle}>Cancel</Text>
        </TouchableOpacity>
   </View>

      </View>
    );
  
  };
  const styles = StyleSheet.create({
    container:{
      paddingTop:30,
      paddingBottom:20,
      flex:1
  
    },
    heading:{
      fontSize:25,
      fontWeight:700,
      textAlign:'center',
      paddingTop:20
    },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:6,
        padding: 10,
      },
    inputText:{
      fontSize:18,
      paddingTop:20,
      fontWeight:400,
      marginLeft:15,
  
    },
    Btn:{
        padding:10,
      backgroundColor:'#8f22cb' ,
      marginTop:40,
      width: 100,
  
    },
    btnTextStyle: {
      color: '#ffffff',
      fontSize: 12,
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    btnView:{
        marginHorizontal:25,
        paddingRight:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    });
export default Hi;
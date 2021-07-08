
import React,{useState} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import Task from './Components/Task';
export default function App() {
  const [task,setTask]=useState('');
  const [taskitems,setTaskitems] = useState([]);
  const handleTask =()=>{
    setTaskitems([...taskitems,task]);
    setTask('');
  };

  return (
  
    
        <View style={styles.container}>
          <ScrollView style={styles.scrollview}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          
          {taskitems.map(item=><Task text={item} />)}
          
      </View>
      </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={(text)=>setTask(text)}/>
     
      <TouchableOpacity onPress={handleTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
   
    </View>
   


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    
  },
  input:{
    backgroundColor:"#ffff",
    borderRadius:60,
    borderColor:"#c0c0c0",
    borderWidth:1,
    paddingHorizontal:15,
    paddingVertical:15,
    width:250,
    
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#ffff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  scrollview:{
    bottom:60,
  }

});

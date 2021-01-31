import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './Components/HeaderCompo';
import RenderItems from './Components/RenderItems';
import InputComponent from './Components/InputCompo';

export default function App() {
  const [items , updateItem] = useState([
    {todo : 'React Native projets' , key : 1},
    {todo : 'Coding on hackerearth' , key : 2},
    {todo : 'Working on personal things' , key : 3}
  ]);

  const handlePress = (pressed) => {
    updateItem((items) => {return items.filter(items => items.key!=pressed)});
  }

  const handleAdd = (val) => {
   updateItem((items) => {return [{todo : val , key : Math.random()}, ...items]});
  }

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <HeaderComponent /> 

      {/* Input form */}
      <InputComponent handleAdd={handleAdd}/>

      {/* Render items */}
      <RenderItems itemsVal={items} handlePress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

import React , {useState} from 'react';
import { StyleSheet, Text, View , TextInput , Button} from 'react-native';

export default function InputComponent({handleAdd}){
    const [value , addItem] = useState('');

    const changeHandler = (val) => {
        addItem(val);
    }
    
    return(
        <View style={style.box}>
            <TextInput style={style.input} placeholder="Enter the todo item" onChangeText={changeHandler}/>
            <Button title="Add" onPress={() => handleAdd(value)}/>
        </View>
    );
}

const style = StyleSheet.create({
    box : {
        marginTop : 40,
        marginLeft : 20,
        marginRight : 20
    },
    input : {
        marginBottom : 15,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderColor : 'black',
    }
})
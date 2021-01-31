import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderComponent(){
    return (
        <View style={style.header}>
            <Text style={style.headertext}>To Do List</Text>
        </View>
    );
}

const style = StyleSheet.create({
    header : {
        backgroundColor : 'lightblue'
    },
    headertext : {
        padding : 15,
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 20
    }
})
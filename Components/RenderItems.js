import React from 'react';
import { StyleSheet, Text, View , FlatList , TouchableOpacity } from 'react-native';

export default function RenderItems({itemsVal , handlePress}){
    return (
        <View style={style.items}>
            <FlatList 
            keyExtractor={(e) => e.key}
            data={itemsVal}
            renderItem={
                ({item}) => <TouchableOpacity onPress={() => handlePress(item.key)}><Text style={style.item}>{item.todo}</Text></TouchableOpacity>
            }
            />
        </View>
    );
}

const style = StyleSheet.create({
    items : {
        margin : 20
    },
    item : {
        borderWidth : 1,
        borderColor : 'black',
        borderStyle : 'dashed',
        padding : 10,
        borderRadius : 10,
        margin : 15
    }
})
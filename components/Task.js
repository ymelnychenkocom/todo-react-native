import React, {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = (props) => {

    const IconTask = <Icon name="info" />

    return (
        <View style={styles.item}>
            <View style={styles.leftItems}>
                <View style={styles.square}><Text style={styles.squareText}>{IconTask}</Text></View>
                <Text style={styles.itemText}> {props.text}</Text>
            </View>
            <View style={styles.deleteBut}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemText: {
        maxWidth: '80%',
        paddingLeft: 15,
        fontWeight: '700'
    },
    leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 31,
        height: 31,
        backgroundColor: '#F9E0E0',
        opacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteBut: {
        width: 23,
        backgroundColor: 'black',
        height: 4,
    },
    squareText: {
        color: 'black'
    }
});

export default Task;
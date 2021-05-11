import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Clock extends Component {

    componentDidMount(){

        setInterval(() => (

            this.setState(
                { curTime : new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
            )
        ), 1000);
    }

    state = {curTime:new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()};


    render() {
        return (
            <View>
                <Text style={styles.time}>{this.state.curTime}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    time: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
    }
})

import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';
import Moment from 'moment';
import Clock from "./clock";

const Images = {
    backgroundDay: require("./sunny.jpg"),
    backgroundNight: require("./night.jpg")
};

const Header = () => {
    let backgroundImage;

    const dateMonth = Moment().format("D MMM");


    const time = new Date().getHours();
    backgroundImage = time >= 6 && time < 18 ? Images.backgroundDay : Images.backgroundNight;

    return (
        <View style={styles.backgroundView}>
            <Image source={backgroundImage} style={styles.backgroundImage}/>
            <Text style={styles.date}>{dateMonth}</Text>
            <Text style={styles.dateTime}><Clock/></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    backgroundImage: {
        width: 370,
        height: 170,
        borderRadius: 30,
    },
    date: {
        position: 'absolute',
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 35,
    },
    dateTime: {
        position: 'absolute',
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 75,
    },
})

export default Header;
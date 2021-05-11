import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Task from "./components/Task";
import Header from "./components/Header";

export default function App(props) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }


    const AcceptIcon = <Icon name="check" size={20}/>

    return (
        <View style={styles.container}>
            <View style={styles.header}><Header/></View>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks!</Text>
                <ScrollView style={styles.scroll}>
                <View style={styles.items}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                                    <Task text={item}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                </ScrollView>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Write a task...'} value={task}
                           onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>{AcceptIcon}</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
    },
    header: {
        paddingTop: 40,
        paddingHorizontal: 20
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    scroll: {
        height: 430,
    },
    items: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {}
});

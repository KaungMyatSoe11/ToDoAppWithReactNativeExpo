import {View, StyleSheet, TextInput, Pressable} from "react-native";
import React, {useState, useContext} from "react";
import {ToDoContext} from "../../context/todo/ToDoProvider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const ToDoInput = () => {
    const [newToDo, setNewToDo] = useState({text: "", id: 0, completed: false});
    const {addtodo} = useContext(ToDoContext);
    const [text, setText] = useState("");

    return (
        <View style={
            styles.todoinput
        }>
            <TextInput style={
                    [styles.input, styles.shadow]
                }
                value={text}
                onChangeText={
                    (text) => {
                        setText(text);
                        setNewToDo((td) => {
                            td.text = text;
                            setNewToDo(td);
                        });
                    }
                }/>

            <Pressable style={
                    [
                        styles.add,
                        styles.shadow,
                        !text && styles.disabled
                    ]
                }
                onPress={
                    () => {
                        if (newToDo) {
                            const id = Math.round(Math.random() * 10000000000);
                            setNewToDo((todo) => {
                                todo.id = id;
                                setNewToDo(todo);
                            });
                            // const new_todo = { text: text, id, completed: false };
                            addtodo(newToDo);
                            setNewToDo({text: "", id: 0, completed: false});
                            setText("");
                        } else {
                            alert("Please enter data");
                        }
                    }
                }
                disabled={
                    !text && true
            }>
                {/* <Text >Add</Text> */}
                <MaterialIcons style={
                        styles.add_icon
                    }
                    color={"#f4f4f4"}
                    name="add"/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        flex: 2,
        backgroundColor: "white",
        borderColor: "#676363",
        borderWidth: 1
    },
    shadow: {
        shadowColor: "#cdcdcd",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.8,
        shadowRadius: 9
    },
    todoinput: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
        JustifyContent: "space-between",
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 15,
        width: "100%"
    },

    add: {
        backgroundColor: "#1080E9",
        padding: 15,
        marginStart: 10,
        borderRadius: 100
    },
    add_icon: {
        fontSize: 25,
        fontWeight: "bold"
    },

    disabled: {
        backgroundColor: "#6BA0D1"
    }
});

export default ToDoInput;

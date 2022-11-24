import { View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ToDoContext } from "../../context/todo/ToDoProvider";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from "expo-checkbox";

const ToDoLabel = ({ todo }) => {
  const { delete_todo, edit_todo, toDos } = useContext(ToDoContext);
  console.log("label", todo);
  console.log({ toDos });
  const [chk, setChk] = useState(todo.completed);
  const [text, setText] = useState(todo.text);
  const [isEdit, setIsEdit] = useState(false);
  const [update_todo, setUpdate_todo] = useState();

  useEffect(() => {
    setChk(todo.completed);
    setText(todo.text);
    setUpdate_todo(todo);
  }, [todo]);

  return (
    <View style={styles.todo}>
      {isEdit ? (
        <View style={styles.editInput}>
          <Checkbox
            value={false}
            disabled={true}
            style={styles.chk_box}
            color={chk ? "#4630EB" : undefined}
          />
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(value) => {
              update_todo.text = value;
              setText(value);
              setUpdate_todo((ud_todo) => {
                ud_todo.text = value;
                setUpdate_todo(ud_todo);
              });
            }}
            onBlur={(e) => {
              console.log({ input: update_todo });
              setIsEdit(false);
              edit_todo(update_todo);
            }}
            autoFocus
          />
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            value={chk}
            style={styles.chk_box}
            color={chk ? "#1080E9" : undefined}
            onValueChange={(value) => {
              setChk(value);
              console.log({ todo });
              const ud_todo = {
                id: todo.id,
                completed: value,
                text: todo.text,
              };
              edit_todo(ud_todo);
            }}
          />
          {/* <Text>{text}</Text> */}
          <Text style={[chk && styles.done, styles.chk_text]}>{text}</Text>
        </View>
      )}
      <View style={styles.action}>
        {!isEdit && (
          <>
            <Pressable
              onPress={() => {
                delete_todo(todo.id);
              }}
              style={{ marginEnd: 10 }}
            >
              <MaterialCommunityIcons
                style={styles.deleteButton}
                name={"delete"}
                size={30}
                color={"red"}
              />
            </Pressable>

            <Pressable
              onPress={() => {
                setIsEdit(true);
              }}
            >
              <MaterialIcons name={"mode-edit"} size={30} color={"#ffdd00"} />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#4d4d4d",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  action: {
    flexDirection: "row",
  },
  done: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
  chk_text: {
    paddingVertical: 15,
    fontSize: 16,
    color: "black",
  },
  deleteButton: {
    opacity: 0.9,
  },
  editInput: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    paddingVertical: 15,
    flex: 1,
  },
  chk_box: {
    marginEnd: 10,
    borderRadius: 100,
    width: 25,
    height: 25,
  },
});
export default ToDoLabel;

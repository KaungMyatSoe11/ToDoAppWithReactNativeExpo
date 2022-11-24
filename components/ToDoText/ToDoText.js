import React from "react";
import {ToDoContext} from "../../context/todo/ToDoProvider";
import {SafeAreaView, FlatList, StyleSheet, View} from "react-native";
import ToDoLabel from "./ToDoLabel";

const ToDoText = () => {
    const {toDos} = React.useContext(ToDoContext);
    console.log(toDos.length);

    const renderItem = ({item}) => {
        // console.log("render", item);
        // return <View>
        //     <Text>
        //         {item}
        //     </Text>
        // </View>
        return (
            <View>
                <ToDoLabel todo={item}/>
            </View>);
    };

    return (
        <SafeAreaView style={styles.container}>
            {toDos.length > 0 && (
                <FlatList
                    style={styles.list}
                    data={toDos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: StatusBar.currentHeight || 0,
        height:200,
        // backgroundColor:"#d2d3"
    },

    list:{
        // position:"absolute",
    }
})

export default ToDoText;

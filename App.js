import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import Header from "./components/Header/Header";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import ToDoText from "./components/ToDoText/ToDoText";
import { ToDoProvider } from "./context/todo/ToDoProvider";

export default function App() {
  return (
    <ToDoProvider>
      <Header />

      <Text style={styles.app_title}>Today Missions</Text>
      <Text style={styles.date}>
        {new Date().toLocaleDateString("en-mm", {
          weekday: "long",
          month: "long",
          day: "2-digit",
        })}{" "}
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ToDoText />
            <ToDoInput />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </ToDoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "pink",
  },
  app_title: {
    fontSize: 28,
    marginBottom: 5,
    marginStart: 10,
    fontWeight: "bold",
  },
  date: {
    marginStart: 15,
    marginBottom: 25,
    color: "#2e4045",
  },
});

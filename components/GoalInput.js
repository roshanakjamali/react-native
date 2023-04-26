import { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput({ onAddGoal, isVisible, onClose }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function goalAddHandler() {
    onAddGoal(enteredGoal);
  }

  useEffect(() => {
    if (isVisible) return;

    setEnteredGoal("");
  }, [isVisible]);

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput
          value={enteredGoal}
          style={styles.textInput}
          placeholder="My Goal is..."
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={goalAddHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#eeeeee",
  },
  textInput: {
    fontSize: 18,
    letterSpacing: -1,
    borderBottomWidth: 1,
    borderColor: "#bbb",
    padding: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
});

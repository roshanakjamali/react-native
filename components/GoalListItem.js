import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalListItem({ goal, id, onDeleteGaol }) {
  return (
    <Pressable
      onPress={onDeleteGaol.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.listItem}>
        <Text style={styles.textList}>{goal}</Text>
      </View>
    </Pressable>
  );
}

export default GoalListItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ddd",
    borderRadius: 8,
    marginVertical: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderLeftColor: "#5b2972",
    borderLeftWidth: 8,
  },
  textList: {
    fontSize: 18,
    marginBottom: 8,
    color: "#5b2972",
  },
  pressedItem: {
    opacity: 0.6,
  },
});

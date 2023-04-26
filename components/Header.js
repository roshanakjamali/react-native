import { View, Text, Button, StyleSheet, Image } from "react-native";

function Header({ onAddGoal }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>React Native</Text>
        <Button title="Add New Goal" onPress={onAddGoal} color="#5b2972" />
      </View>
      <Image style={styles.image} source={require("../assets/goal.png")} />
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    borderStartWidth: 30,
    borderStartColor: "#DDD",
    borderStyle: "solid",
    paddingLeft: 4,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: "#5c6773",
    letterSpacing: -1,
  },
  image: {
    width: "100%",
    height: 150,
  },
});

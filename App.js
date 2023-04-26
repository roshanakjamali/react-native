import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SectionList, StyleSheet, Text, View } from "react-native";

import GoalListItem from "./components/GoalListItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function goalAddHandler(enteredGoal) {
    setGoalList((prevList) => [
      ...prevList,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalList((prevList) => {
      return prevList.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {/* StatusBar will change the color of top statusbar in mobile -> dark / light / auto */}
      <StatusBar style="dark" />
      <View style={styles.container}>
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={[{ data: goalList }]}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={() => (
            <>
              <View style={styles.headerWrapper}>
                <Header onAddGoal={startAddGoalHandler} />
                <GoalInput
                  onAddGoal={goalAddHandler}
                  isVisible={modalIsVisible}
                  onClose={endAddGoalHandler}
                />
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>My Goals Are...</Text>
                </View>
              </View>
            </>
          )}
          renderItem={({ item: goal }) => (
            <GoalListItem
              id={goal.id}
              goal={goal.text}
              onDeleteGaol={deleteGoalHandler}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  headerWrapper: {
    height: "auto",
  },
  subtitleContainer: {
    backgroundColor: "#866498",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

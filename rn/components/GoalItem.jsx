import { View, Text, StyleSheet, Pressable } from 'react-native';
// TOuchable 컴포넌트는 옛날 -> 지금 Pressable로 대체

export const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

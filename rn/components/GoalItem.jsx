import { View, Text, StyleSheet } from 'react-native';

export const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
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

import { Text } from 'react-native';

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  return <Text>This is the Meal Detail Screen (${mealId})</Text>;
};

export default MealDetailScreen;

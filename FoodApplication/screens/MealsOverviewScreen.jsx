import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

// React Navigation에서 Screen으로 등록된 컴포넌트라면, navigation 프로퍼티와 더불어 route 프로퍼티를 받으며, 여기에는 params 프로퍼티가 잇다.
const MealsOverviewScreen = ({ route }) => {
  // 스크린으로 등록되지 않은 중첩 컴포넌트에서 아래와 같이 useRoute 훅을 통해 사용할 수 있습니다.
  //   const route = useRoute();
  //   route.params;
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    // 만약 배열에 특정 카테고리가 없으면 -1을 반환 indexOf가
    // 0보다 크거나 같으면 매칭이 되었다는 것임.
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

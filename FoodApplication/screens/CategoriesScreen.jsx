import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';

// react-navigation이 제공하는 navigation prop을 받을 수 있다.
const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      // App.js에서 네비게이션을 설정한 이름을 바탕으로 이동한다.
      navigation.navigate('MealsOverview', {
        // 각각 이동할, 키랑, 아이디값 정의
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  // 여기서 전달받은 navigation을 위의 함수에 전달하고 싶으면 renderCategoryItem.bind()를해도됨
  // 아니면 renderCategoryItem을 함수 내부로 옮김
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      // 기본 1열 -> 2열로 변경
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

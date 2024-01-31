import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
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

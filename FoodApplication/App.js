import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <ScrollView>
      <StatusBar style='light' />
      <CategoriesScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        {/* 멋진 헤더 추가, 충돌하지 않도록 안전영역도 추가 */}
        {/* Stack.Navigator에는 initialRouteName으로, 먼저 보여주고 싶은 페이지의 이름을 연결할 수 있다. */}
        {/* 공통속성은 Navigator에 */}
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // Dynamic하게 헤더 변경 방법1.
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

// Stack vs NativeStack 스택 기반  내비게이션에서는 화면 위 다른 페이지 푸시하고, 이전 페이지로 돌아갈 수 있음.
// NativeStack은 에니메이션과 화면에 대해, 네이티브 플랫폼 요소를 사용하기 때문에, 네이티브 동작을 흉내내는 스택보다 성능이 더 높을 수 잇다. 그래서 보통 네이티브 스택을 선호. (네이티브 스택 사용하는데 문제가 있으면, 스택 기반 네비게이션을 제공하는 것으로 fallback가능)

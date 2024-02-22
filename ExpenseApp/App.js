import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';

// Stack + 하단탭
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// 별도의 파일 분리가능
const ExpensesOverview = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          // tintColor을 프랍으로 갖을 수 있음. 위의 정의한 색상
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {}}
          />
        ),
      }}
    >
      <BottomTab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          // 화면에서 적용되는 아이콘 (아이콘으로 렌더링되는 jsx 요소를 반환하는 컴포넌트 함수를 취함.)
          // react-navigation이 자동으로 property 제공(color, size)
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        {/* Stack Navigator을 메인으로 */}
        <Stack.Navigator>
          {/* InitialRouteName을 지정해주지않으면, 아래께 먼저나옴 */}
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

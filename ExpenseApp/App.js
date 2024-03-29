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
import ExpensesContextProvider from './\bstore/expenses-context';

// Stack + 하단탭
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// 별도의 파일 분리가능
const ExpensesOverview = () => {
  return (
    <BottomTab.Navigator
      // 화살표 함수로, 감싸면서 navigation을 줄 수 있음.
      screenOptions={({ navigation }) => ({
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
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
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
      <ExpensesContextProvider>
        <NavigationContainer>
          {/* Stack Navigator을 메인으로 */}
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            {/* InitialRouteName을 지정해주지않으면, 아래께 먼저나옴 */}
            <Stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ManageExpense'
              component={ManageExpense}
              options={{
                // Presentation은 화면 로딩 방법을 제어하는 옵션,  modal 설정시 iOS에서 다르게 구현 (안드로이드는 이미 모달이라 별로 차이없음)
                presentation: 'modal',
                title: 'Manage Expense',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

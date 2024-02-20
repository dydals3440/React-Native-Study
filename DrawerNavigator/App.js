import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 개별속성줘도되지만, 공통속성 줘도됨 */}
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
        }}
      >
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person' color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    // View는 콘텐츠가 들어가는 높이만 차지
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});

// Expo Linear Gradient
// expo install -> 프로젝트에 알맞은 버전을 설치하도록함(프로젝트에 사용하고있는 expo버전 확인)

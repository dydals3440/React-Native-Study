import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    // View는 콘텐츠가 들어가는 높이만 차지
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        // 이미지의 스타일을 따로 설정할 수 있음.
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// Expo Linear Gradient
// expo install -> 프로젝트에 알맞은 버전을 설치하도록함(프로젝트에 사용하고있는 expo버전 확인)

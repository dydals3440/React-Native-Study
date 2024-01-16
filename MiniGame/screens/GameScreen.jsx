import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

// 최신 스마트폰에는 노치가 있습니다 .콘텐츠가 노치에 너무 가깝거나, 가려지지 않도록 거리를 두어야 한다. 노치가 없는 스마트폰도 있고, 스마트폰의 크기도 제각각이다. 실행중인 장치를 자동으로 감지하고, 노치와 상태 표시줄과 콘텐츠 사이에 적절한 간격을 자동으로 추가하는 컴포넌트가 SafeAreaView이다.

// randomNumber
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <Text>LOG ROUNDS</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

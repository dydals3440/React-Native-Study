import { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  // 다른 콘텐츠 또는 입력란을 포함하는 다른 콘텐츠를 감싸는 데 사용할 수 있는 컴포넌트, 키보드가 열릴 때마다 입력 요소 및 다른 요소가 화면 위로 올라가, 키보드가 열려도 엑세스 가능!
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  // windowDimensions를 쓰는게 좋음 (dimensions는 스타일코드에 딱 한번 앱이 켜질떄 실행됨. 여기다가 쓰면 매번 재실행되기 떄문이다(함수컴포넌트))
  const { width, height } = useWindowDimensions();

  const marginTopDistance = height < 380 ? 30 : 100;

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    // ScrollView로 감싸주는이유, 그냥 KeyboardAvoidingView만 이용하면, 아예 인풋창이 위로 올라가버리는데, 계속해서 flatList로 아이템이 추가된다고 생각해서, 너무 위로 올라가버린다. 스크롤뷰로 바꿔주면 스크롤이 가능하다고 인식하니 해당 부분 UI를 유지시킨다.
    <ScrollView styles={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        {/* // 이 컴포넌트 함수는 치수가 변경될떄마다 재실행됨 (그래서 Dimensions가
      아닌 useWindowDimensions 훅을 사용하는 것) */}
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 450 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

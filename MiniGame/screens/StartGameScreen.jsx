import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

const StartGameScreen = ({ onPickNumber }) => {
  // 0 같은 숫자가 아닌, 빈 문자열인 이유는 enteredNumber을 TextInput 컴포넌트에 묶으면 결과값은 항상 문자열이다! 그래서 ('')로 설정한것이 이유다.
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return; // 함수의 실행을 멈춤.
    }
    // enteredNumber가 아닌, 유효성 검사를 통과한 chosenNumber를 통과시켜주어야한다. (onPickNumber은, APP.js에서 받음!)
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      {/* 객체 안에, number로 주어야 한다. */}
      {/* 일반 텍스트 키보드가 나오는데, 숫자키보드가 나오게 해줄것이다 */}
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        // 숫자를 다룰때는 중요하지 않지만, 일반 텍스트가 포함되어있으면 자동으로 대문자가 입력되게!
        autoCapitalize='none'
        // 자동 수정을 켜고 끌 수 있는 auto Correct 프로퍼티도 있음
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    // android shadow
    elevation: 4,
    // IOS Shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    // 따로 버튼을 감싸주어, 버튼의 너비가 동일하게 설정.
    flex: 1,
  },
});

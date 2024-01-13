import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
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
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#430825',
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
});

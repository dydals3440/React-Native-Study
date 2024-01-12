import { useState } from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

const GoalInput = (props) => {
  // text인풋은 이제 App.js에서 필요가 없다.
  const [text, setText] = useState('');
  const goalInputHandler = (e) => {
    setText(e);
  };

  const addGoalHandler = () => {
    props.onAddGoal(text);
    setText('');
  };
  // courseGoals의 상태는 App.js에 있지만,
  // 사용자 입력은 다른 컴포넌트에 있는 것이 문제다.
  // 프로퍼티를 통해 이벤트 핸들러 기능을 보내서, 부모 컴포넌트를 호출할 수도 있습니다.
  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          // TextInput에는, onChangeText로 관리 (리액트 onChange)
          // 함수를 절대 () 실행하면안됨, 이러면 코드를 파싱하고 평가하는 즉시 함수가 실행되기 떄문이다 UI 렌더링
          // 이전에 실행하기 떄문이다!
          onChangeText={goalInputHandler}
          value={text}
        />
        {/* 함수가 값인 프로퍼티로 부모 컴포넌트로부터 받을 수 있다. 누를떄마다 실행됨. */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column', // default : fleDirection: column
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,

    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

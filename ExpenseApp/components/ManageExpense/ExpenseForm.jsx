import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount, // 문자열을 숫자로 변환
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        {/*  style={styles.rowInput}를 통해, 아래 input에는 영향 안가게 */}
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            // 이제 포괄적인 함수이기 떄문에 inputIdentifier가 실행되었을때 이 함수에 전해지도록 해야한다.
            // enteredValue는 RN이 자동으로 전달하는데 InputIdentifier는 우리가 만들어 낸거라서 자동으로 전달되지 않음. RN이 모르는 개념, 자스에서 차후 실행을 위해 함수를 미리 구성 가능 bind 메서드를 통해
            // 첫번째 인수는 실행할 함수의 this 키워드가 무엇을 지목할지 정의! this 키워드를 사용하지 않으니 this를 설정해도 아무 효용이 없다. 두번쨰 인수는 이 함수가 받는 첫번쨰 인수인, inputidentifier, enteredValue는 따로 설정할 필요가 없음. 기본적으로 두 번쨰 매개변수로서 추가되기 떄문.
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues['amount'],
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues['date'],
          }}
        />
      </View>
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          //   autoCorrect: false, // default is true
          //   autoCapitalize: 'none', default: sentences
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues['description'],
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

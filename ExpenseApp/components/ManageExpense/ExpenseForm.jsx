import { StyleSheet, Text, View, Alert } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { GlobalStyles } from '../../constants/styles';

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value, // 문자열을 숫자로 변환
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    // newDate()에 이상한 문자열 넣으면 Invalid Date라는 결과값 나옴
    const dateIsValid = expenseData.date.toString() === 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        {/*  style={styles.rowInput}를 통해, 아래 input에는 영향 안가게 */}
        <Input
          style={styles.rowInput}
          label='Amount'
          inValid={inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            // 이제 포괄적인 함수이기 떄문에 inputIdentifier가 실행되었을때 이 함수에 전해지도록 해야한다.
            // enteredValue는 RN이 자동으로 전달하는데 InputIdentifier는 우리가 만들어 낸거라서 자동으로 전달되지 않음. RN이 모르는 개념, 자스에서 차후 실행을 위해 함수를 미리 구성 가능 bind 메서드를 통해
            // 첫번째 인수는 실행할 함수의 this 키워드가 무엇을 지목할지 정의! this 키워드를 사용하지 않으니 this를 설정해도 아무 효용이 없다. 두번쨰 인수는 이 함수가 받는 첫번쨰 인수인, inputidentifier, enteredValue는 따로 설정할 필요가 없음. 기본적으로 두 번쨰 매개변수로서 추가되기 떄문.
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          inValid={inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label='Description'
        inValid={inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          //   autoCorrect: false, // default is true
          //   autoCapitalize: 'none', default: sentences
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input Values - Please Check Your Entered Data
        </Text>
      )}
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
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

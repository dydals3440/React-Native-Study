import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../\bstore/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  // undefined면 id를 받지 못하므로 추가모드, undefined가 아니면 수정 모드.
  // !!를 붙여서, 값을 불리언으로 전환!
  const isEditing = editedExpenseId;
  // console.log(!!isEditing);
  // setOptions를 컴포넌트에 바로 호출 X, useEffect로 감싸거나, 처음에 깜빡거리는걸 막기위해, useLayOutEffect 훅으로 감싸야 한다.

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  console.log(selectedExpense);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    isEditing
      ? expensesCtx.updateExpense(editedExpenseId, expenseData)
      : expensesCtx.addExpense(expenseData);
    // 항상 이후에 모달을 닫음
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

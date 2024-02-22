import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  // undefined면 id를 받지 못하므로 추가모드, undefined가 아니면 수정 모드.
  // !!를 붙여서, 값을 불리언으로 전환!
  const isEditing = editedExpenseId;
  // console.log(!!isEditing);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  // setOptions를 컴포넌트에 바로 호출 X, useEffect로 감싸거나, 처음에 깜빡거리는걸 막기위해, useLayOutEffect 훅으로 감싸야 한다.

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});

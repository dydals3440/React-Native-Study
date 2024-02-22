import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../\bstore/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});

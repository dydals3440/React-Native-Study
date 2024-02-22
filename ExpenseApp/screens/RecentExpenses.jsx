import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../\bstore/expenses-context';
import { getDateMinusDays } from '../utils/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});

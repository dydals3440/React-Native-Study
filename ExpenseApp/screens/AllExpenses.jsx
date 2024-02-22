import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod='Total' />;
};

export default AllExpenses;

const styles = StyleSheet.create({});

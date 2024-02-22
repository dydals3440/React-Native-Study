import { StyleSheet, Text, View, FlatList } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-02-22'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 90.29,
    date: new Date('2023-03-25'),
  },
  {
    id: 'e3',
    description: 'Some Bananas',
    amount: 5.29,
    date: new Date('2023-03-29'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 24.99,
    date: new Date('2024-02-22'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});

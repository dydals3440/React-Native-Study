import { createContext, useReducer } from 'react';

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

export const ExpensesContext = createContext({
  // auto completion을 도와주는 initialValue
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  // 첫번째 요소는 리듀서가 상태 관리, 두번쨰 요소는 dispatch 새로운 행동을 리듀서 함수로 보낼떄(상태조작)
  // useReducer 두번쨰 인자, 초기값
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = ({ expenseData }) => {
    // 행동을 전달. (action.type이므로 type으로 키값을 변환)
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;

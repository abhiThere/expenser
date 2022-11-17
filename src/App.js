import { Fragment, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Header from "./layout/Header";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 60.25,
    date: new Date(2020, 5, 10),
  },
  {
    id: "e2",
    title: "New Clothes",
    amount: 100.66,
    date: new Date(2020, 2, 22),
  },
  { id: "e3", title: "New TV", amount: 800.99, date: new Date(2021, 10, 29) },
  {
    id: "e4",
    title: "Shoes",
    amount: 75.87,
    date: new Date(2022, 8, 8),
  },
  {
    id: "e5",
    title: "New Laptop",
    amount: "500.50",
    date: new Date(2022, 11, 10),
  },
  {
    id: "e6",
    title: "New Phone",
    amount: "280.45",
    date: new Date(2022, 4, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Fragment>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Fragment>
  );
};

export default App;

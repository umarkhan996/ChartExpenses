import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI_Compo/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpnses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // We can give a massage when we have not any expenses (Best way)

    // let expensesContent = < p > No expenses Found. < /p>;
    // if (filteredExpnses.length > 0) {
    //     expensesContent = filteredExpnses.map((expense) => ( <
    //         ExpenseItem key = { expense.id }
    //         title = { expense.title }
    //         amount = { expense.amount }
    //         date = { expense.date }
    //         />

    //     ));
    // }



    return ( <
        div >
        <
        Card className = "expenses" >
        <
        ExpensesFilter selected = { filteredYear }
        onChangeFilter = { filterChangeHandler }
        />


        <
        ExpensesList items = { filteredExpnses }
        /> < /
        Card > < /
        div >
    );
};

export default Expenses;
import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    // we can call a function in new component in  we pass data as a parameter, Can communicate the component to app.  
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };


    return ( <
        div className = 'new-expense' >
        <
        ExpenseForm onSaveExpenseData = { saveExpenseDataHandler }
        / > < /
        div >



        // (
        //   <div className='expenses-filter'>
        //     <div className='expenses-filter__control'>
        //       <label>Filter by year</label>
        //       <select>
        //         <option value='2022'>2022</option>
        //         <option value='2021'>2021</option>
        //         <option value='2020'>2020</option>
        //         <option value='2019'>2019</option>
        //       </select>
        //     </div>
        //   </div>
    );
};

export default NewExpense;
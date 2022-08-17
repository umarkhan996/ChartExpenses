import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    return ( <
        div className = 'new-expense' >
        <
        ExpenseForm / >
        <
        /div>



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
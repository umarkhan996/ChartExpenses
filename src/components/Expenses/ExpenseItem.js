import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI_Compo/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const month = props.data.toLocaleStirng('en-US', { month: 'long' });
    // const day = props.data.toLocaleStirng('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();


    // return ( <
    //     div className = 'expense-item' >



    // <
    // div >
    // <
    // div > { month } < /div> <
    // div > { year } < /div> <
    // div > { day } < /div>  <
    // /div>

    // return ( <
    //     div className = 'expense-item' >


    //     <
    //     div > { props.date.toISOString() }

    //     <
    //     /div>   <
    //     div className = 'expense-item__description' >
    //     <
    //     h2 > { props.title } < /h2> <
    //     div className = 'expense-item__price' > $ { props.amount } < /div> < /
    //     div > <
    //     /div>


    //     We can use Card insteed of  main div,then we got same result 



    //Event Listener 


    // let title = props.title;

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {

        setTitle('Updated!');
        console.log(title);
    };
    return ( <
        Card className = 'expense-item' >
        <
        ExpenseDate date = { props.date }
        /> <
        div className = 'expense-item__description' >
        <
        h2 > { title } < /h2> <
        div className = 'expense-item__price' > $ { props.amount } < /div> < /
        div >
        <
        button onClick = { clickHandler } > Change title < /button> < /
        Card >




    );



    // function ExpenseItem() {
    //     const expenseDate = new Date(2021, 7, 11);
    //     const expenseTitle = 'INSURANCE';
    //     const expenseAmount = 11599.56;
    //     return ( <
    //         div className = 'expense-item' >
    //         <
    //         div > { expenseDate.toISOString() } < /div> <
    //         div className = 'expense-item__description' >
    //         <
    //         h2 > { expenseTitle } < /h2> <
    //         div className = 'expense-item__price' > $ { expenseAmount } < /div>  <
    //         /div >  <
    //         /div>
    //     );
    // }
    // export default ExpenseItem;






    // 4 time print same thing

    // function ExpenseItem() {
    //     const expenseDate = new Date(2021, 7, 11);
    //     const expenseTitle = 'INSURANCE';
    //     const expenseAmount = 11599.56;

    //     return ( <
    //         div className = 'expense-item' >
    //         <
    //         div > { expenseDate.toISOString() } < /div> <
    //         div className = 'expense-item__description' >
    //         <
    //         h2 > { expenseTitle } < /h2> <
    //         div className = 'expense-item__price' > $ { expenseAmount } < /div> <
    //         /div>

    //         <
    //         /div>
    //     );
}
export default ExpenseItem;
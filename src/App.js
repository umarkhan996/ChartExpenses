import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';



const App = () => {
    const expenses = [{
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];



    //Add New  Extra Expenses
    return <div >
        <
        NewExpense / >
        <
        Expenses items = { expenses }
    /> < /
    div >




        // var count = 0;
        // var increamentCounter = () => {
        //     count++;
        //     console.log(count);
        //     document.getElementById("count").innerHTML = count;
        // };

        // THIS IS React Js code

        // return React.createElement('div', {}, React.createElement('h2', {}, "Let's Get Started !"), React.createElement(Expenses, { items: expenses })); <
        // div className = 'App' >
        //     <
        //     span id = "count" > { count } < /span> <
        // button onClick = { increamentCounter } > increament < /button> < /
        // div >







        // THIS IA JSX CODE 
        // return ( <
        //     div >
        //     <
        //     h2 > Let 's get started!</h2>   <
        //     Expenses items = { expenses }
        //     />     < /
        //     div >








        // <
        // ExpenseItem title = { expenses[0].title }
        // amount = { expenses[0].amount }
        // date = { expenses[0].date } >
        // <
        // /ExpenseItem> <
        // ExpenseItem title = { expenses[1].title }
        // amount = { expenses[1].amount }
        // date = { expenses[1].date } >
        // <
        // /ExpenseItem> <
        // ExpenseItem title = { expenses[2].title }
        // amount = { expenses[2].amount }
        // date = { expenses[2].date } >
        // <
        // /ExpenseItem> <
        // ExpenseItem title = { expenses[3].title }
        // amount = { expenses[3].amount }
        // date = { expenses[3].date } >
        // <
        // /ExpenseItem> 
        // <
        // /
        // div >


        // );





        // 4 time print same thing

        // function App() {
        //     return ( <
        //         div >
        //         <
        //         h1 > Let 's Print 4 Time </h1>  <
        //         ExpenseItem > < /ExpenseItem>  <
        //         ExpenseItem > < /ExpenseItem>   <
        //         ExpenseItem > < /ExpenseItem>  <
        //         ExpenseItem > < /ExpenseItem>  < /
        //         div >
        //     );
}

export default App;
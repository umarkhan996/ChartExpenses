import React from "react";


import './ExpenseForm.css';
const ExxpenseFrom = () => {
    return ( <
        form >
        <
        div className = "new-expense__controls" >
        <
        div className = "new-exepnse__controls" >
        <
        label > Title < /label> <
        input Type = 'text' / >
        <
        /div> <
        div className = "new-exepnse__controls" >
        <
        label > Amount < /label> <
        input Type = 'number'
        min = '0.01'
        step = '0.01' / >
        <
        /div> <
        div className = "new-exepnse__controls" >
        <
        label > Date < /label> <
        input Type = 'date'
        min = '2018-01-01'
        max = '2032-01-01' / >
        <
        /div> < /
        div >

        <
        div className = "new-expense__actions" >
        <
        button type = 'submit' > Add Expense 0 <
        /button> < /
        div >

        <
        /form>
    );

};

export default ExxpenseFrom;
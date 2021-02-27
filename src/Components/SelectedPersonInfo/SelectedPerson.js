import React from 'react';
import './SelectedPerson.css'
const SelectedPerson = (props) => {
    // console.log('cart item',props.cart.length)
    // const fullName = props.cart;
    const cart = props.cart;
    let totalSalary = 0;
    function numberFormat(num){
        return (num).toFixed(2)
    }
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i].salary;
        totalSalary += salary
    }
    return (
        <div className='cart-item'>
            <h3>Person Selected : {cart.length}</h3>
            <h3>Total Salary: {numberFormat(totalSalary)} </h3>
        </div>
    );
};

export default SelectedPerson;
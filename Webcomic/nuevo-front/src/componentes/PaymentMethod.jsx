// src/components/PaymentMethods.js
import React from 'react';
//import './PaymentMethods.css';

const PaymentMethods = () => {
    return (
        <div className="payment-methods">
            <img className='payment-methods-img' src="/images/visa.png" alt="Visa" />
            <img className='payment-methods-img' src="/images/dinero.png" alt="Matercard    " />
            <img className='payment-methods-img' src="/images/paypal.png" alt="PayPal" />
            <img className='payment-methods-img' src="/images/pago-de-apple.png" alt="Apple Pay" />
        </div>
    );
};

export default PaymentMethods;

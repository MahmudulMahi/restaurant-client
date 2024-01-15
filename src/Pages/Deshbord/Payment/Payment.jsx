import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gatway_PK)

const Payment = () => {
  return (
    <div>
      <SectionTitle heading='Payment' subHeading="Please Pay to eat"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
        <Checkout></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
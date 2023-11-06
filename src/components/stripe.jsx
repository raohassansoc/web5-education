"use client"
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
export const stripePromise = loadStripe('pk_test_51NgTEPF0dZGOhpsSngg8M06JnT9b13W8qGBEeu8uOCaXYrh50uthNH0Dsa99N7pyQ6L1otT30Mun5rw7YGAEjZPL007PEjuNIh');

function PaymentForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Handle the successful payment method creation
      // Create a payment intent or charge on your server with the specified amount
      // You will need to send the payment amount to your server for processing
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
    <h1 style={{fontWeight:'bolder'}} >Pay With Stripe</h1>
      <CardElement />
      <button type="submit">Pay {amount} USD</button>
    </form>
  );
}

export default PaymentForm;


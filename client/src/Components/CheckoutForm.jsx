import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          setError(true)
          break;
        case "processing":
          setMessage("Your payment is processing.");
          setError(true)
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          setError(true)
          break;
        default:
          setMessage("Something went wrong.");
          setError(true)
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
    
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
      
        return_url: "http://localhost:3000/checkout-success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
      setError(true)
    } else {
      setError(true)
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }
  const handleChange = (event) => {
    if (event && event.target) {
      setEmail(event.target.value);
      console.log(email)
    }
  }

  return (
    <form className='font-thin text-black text-sm' id="payment-form" onSubmit={handleSubmit}>
      <p className='pb-2 text-center'>$1.00 Invictus Certification</p>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div  className="spinner" id="spinner"></div> : <p className='text-white bg-black rounded-md mt-4 px-2 py-1 hover:bg-white hover:text-black'>Pay now</p>}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}

      {error && <button className='text-white bg-black rounded-md py-1 px-2 mt-4 hover:bg-white hover:text-black'
      onClick={() => {navigate('/all-certifications')}}>Go back to Certifications</button>}
    </form>
  );
}
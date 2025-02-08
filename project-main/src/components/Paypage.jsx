import { loadStripe } from '@stripe/stripe-js';
import { useState } from "react";
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise=loadStripe('Your_Public_Stripe_Key')
const Checkout=()=>{
    const stripe=useStripe()
    const elements=useElements()
    const [error,setError]=useState(null)
    const[success,setSuccess]=useState(null)
    
    const handleSubmit=async(event)=>{
        event.preventDefault()

        if (!stripe||!elements) {
            return;
        }
        const cardElement=elements.getElement(CardElement)

        const{error,payment}=await stripe.confirmCardPayment('YOUR_CLIENT_SECRET',{
            payment_method:{
                card:cardElement,
            }
    })
    if (error) {
        setError(error.message)
        setSuccess(null)
    }
    else{
        setSuccess('Payment Successful!')
        setError(null)
        console.log(payment)
    }

}
return(
    <form onSubmit={handleSubmit}>
        <CardElement/>
        <button type="Submit" disabled={!stripe}>Pay</button>
        {error && <div>{error}</div>}
        {success && <div>{success}</div>}
        </form>

    )
}
const Paypage=()=>{
    return(
        <Elements stripe={stripePromise}>
            <h1>Payment Page</h1>
            <Checkout/>
        </Elements>
    )
}
export default Paypage
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckOutButton = ({price}) => {
const priceForStripe = price * 100
const publishableKey = 'pk_test_pVW8oC2N4mAb0FXRAMRAIKxI00qmVdGapU'

const onToken = token => {
    console.log(token)
    alert('Payment Succesful')
}

return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckOutButton
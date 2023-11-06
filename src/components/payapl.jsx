"use client"
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButton() {
  return (

        <PayPalScriptProvider options={{ "client-id": "AZVZpgfCSGpErl2zEQ5_JhgARYed8ldcy963GaVcZ_rC7JKf8qZkCuYS66p8mluyevBQV7ZjQZjpxzj_" }}>
      <div>
        <h1>Complete Your Payment</h1>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '10.00', // Replace with your desired amount
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            console.log("Payment completed successfully!");
            console.log("Transaction data:", actions);
            // You can perform additional actions here if needed
          }}
        />
      </div>
      </PayPalScriptProvider>
  );
}

export default PayPalButton;

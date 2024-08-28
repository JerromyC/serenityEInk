paypal.Buttons({
    createOrder: function(data, actions) {
        // Set up the transaction
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.01' // The amount to charge in USD
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        // Capture the funds from the transaction
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        // Show an error page here, when an error occurs
        console.error(err);
        alert('An error occurred during the transaction');
    }
}).render('#paypal-button-container');
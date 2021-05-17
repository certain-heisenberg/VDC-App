const stripe = require('stripe')('sk_test_51Ig6dfSEehnNUNdb4rBNeKUsOo6a9cf36maSLrnWZGWmTer8Ynisz7jfsXpPjDW7gx5m8oWMV6uxTBJjRqm7mVNj001KLASm78');

exports.handler = async (event) => {
    const { typeName, arguments } = event;

    if (typeName != 'Mutation') {
        throw new Error('Request is not a mutation');
    }

    if (!arguments?.amount) {
        throw new Error('Amount argument is required');
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'inr'
    });

    return {
        clientSecret: paymentIntent.client_secret,
    }
};

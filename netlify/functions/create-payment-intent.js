require('dotenv').config();

const stripe = require('stripe')('sk_test_51MDPKaGnnxx3wfs5gfppDiyqPS3yWLSRxDI2dRdne4ytJn1MUX3GaAnsv41tDwoCJgDHZgrDfvfsn0k0hXtzRuug00E1j3vrIE');

exports.handler = async (event) => {
    try {
       const {amount} = JSON.parse(event.body);
       
       const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
       })

       return {
        statusCode: 200,
        body: JSON.stringify({paymentIntent})
       }
    } catch (error) {
        console.log({error});

        return {
            status: 400,
            body: JSON.stringify({error}),
        }        
    }
}
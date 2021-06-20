const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51J3dfCSJ9P4UWuupXuxwY4UEcjIguNMH1ouEkOos6S5N6ElBp2ilpkh7m2Pa34A4RQj3Ig2TEbShqsU12szJ2Ith00a1Dx2rqi')

//-- API


//-App config
const app = express();

//-Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//-API Routes
app.get('/', (request,response) => response.status(200).send('Hello World'))


app.post('/payments/create', async(request,response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved for the amount :',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

//-Listen command

exports.api = functions.https.onRequest(app)

//-Example endpoint
//http://localhost:5001/clone-cbdaa/us-central1/api


"use strict";

/**
 * A set of functions called "actions" for `payment`
 */
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

module.exports = {
  token: async (ctx, next) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: ctx.request.body.amount * 100,
        currency: ctx.request.body.currency,
      });

      ctx.body = {
        clientSecret: paymentIntent.client_secret,
      };
      return;
    } catch (e) {
      ctx.body = e;
      console.log(e);
    }
  },
};

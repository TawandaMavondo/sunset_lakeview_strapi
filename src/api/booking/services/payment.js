"use strict";

/**
 * payment service.
 */
const stripe = require("stripe")("sk_test_INSERT YOUR API KEY");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::booking.payment", ({ strapi }) => {
  ({
    create: async (payload) => {
      // const { checkIn, checkOut, room,token } = payload;
      const { address, amount, description, token, city, state } = payload;
      // const { address, amount, dishes, token, city, state } = payload;
      const charge = await stripe.charge.create({
        amount: amount,
        currency: "usd",
        description: description,
        source: token,
      });

      return charge;
    },
  });
});

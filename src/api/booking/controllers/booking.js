"use strict";

/**
 *  booking controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::booking.booking", ({ strapi }) => ({
  async create(ctx) {
    const {
      checkIn,
      checkOut,
      room,
      amount,
      description,
      token,
      address,
      city,
      state,
    } = ctx.request.body.data;
    try {
      const isAvailable = await strapi
        .service("api::booking.booking")
        .checkAvailability(checkIn, checkOut, room);

      if (isAvailable) {
        const payload = {
          address,
          amount,
          description,
          token,
          city,
          state,
        };
        const payment = await strapi
          .service("api::booking.booking")
          .payment(payload);
        if (payment) {
          const response = await super.create(ctx);
          return response;
        }
      }
      ctx.body = {
        isAvailable: isAvailable,
      };
      ctx.response.status = 400;
    } catch (e) {
      console.log(e);
    }
  },
}));

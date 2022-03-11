"use strict";

/**
 * A set of functions called "actions" for `available`
 */

module.exports = {
  index: async (ctx, next) => {
    try {
      const { checkIn, checkOut, room } = ctx.request.body;

      const response = await strapi
        .service("api::booking.booking")
        .checkAvailability(checkIn, checkOut, room);
      ctx.body = {
        isAvailable: response,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};

"use strict";

/**
 * A set of functions called "actions" for `available`
 */

module.exports = {
  index: async (ctx, next) => {
    try {
      ctx.body = "ok";
      // console.log(ctx.request.body);
      const { checkIn, checkOut, room } = ctx.request.body;

      const entity = await strapi.service("api::booking.booking").validate(checkIn,checkOut,room);

    } catch (err) {
      ctx.body = err;
    }
  },
};

"use strict";

const checkNotNullOrUndifined = require("../../../utils/check");

/**
 * A set of functions called "actions" for `available`
 */

module.exports = {
  index: async (ctx, next) => {
    try {
      const { checkIn, checkOut, room } = ctx.request.body.data;
      checkNotNullOrUndifined(checkIn, "checkIn field is required");
      checkNotNullOrUndifined(checkOut, "checkOut field is required");
      checkNotNullOrUndifined(room, "room field is required");

      const response = await strapi
        .service("api::booking.booking")
        .checkAvailability(checkIn, checkOut, room);

      ctx.body = {
        isAvailable: response,
      };
      if (!response) {
        ctx.response.status = 400;
      }
    } catch (err) {
      ctx.body = err.message;
      ctx.response.status = 400;
    }
  },
};

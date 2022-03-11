"use strict";

/**
 *  booking controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::booking.booking", ({ strapi }) => ({
  async create(ctx) {
    const { checkIn, checkOut, room } = ctx.request.body.data;

    const isAvailable = await strapi
      .service("api::booking.booking")
      .checkAvailability(checkIn, checkOut, room);

    if (isAvailable) {
      const response = await super.create(ctx);
      return response;
    }
    ctx.body = {
      isAvailable: isAvailable,
    };
    ctx.response.status = 400;

    // return response;
  },
}));

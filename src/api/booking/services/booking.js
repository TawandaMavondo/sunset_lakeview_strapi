"use strict";

/**
 * booking service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::booking.booking", ({ strapi }) => ({
  async validate(checkIn, checkOut, roomId) {
    const parameters = {
      filters: {
        $and: [
          {
            checkIn: { $gte: checkIn },
          },
          {
            checkOut: { $lte: checkOut },
          },
        ],
      },
    };
    const entity = await strapi.entityService.findMany(
      "api::booking.booking",
      parameters
    );

    console.log(entity);
  },
}));

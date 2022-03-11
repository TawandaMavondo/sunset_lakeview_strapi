"use strict";

/**
 * booking service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

function calculateTimeStamp(date) {
  return new Date(date).getTime();
}
function between(value, min, max) {
  return value >= min && value <= max;
}

module.exports = createCoreService("api::booking.booking", ({ strapi }) => ({
  async checkAvailability(checkIn, checkOut, roomId) {
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
    const checkInTimeStamp = calculateTimeStamp(checkIn);
    const checkOutTimeStamp = calculateTimeStamp(checkOut);

    const entities = await strapi.entityService.findMany(
      "api::booking.booking"
    );

    const filtered = entities.filter((element) => {
      return (
        between(
          checkInTimeStamp,
          calculateTimeStamp(element.checkIn),
          calculateTimeStamp(element.checkOut)
        ) ||
        between(
          checkOutTimeStamp,
          calculateTimeStamp(element.checkIn),
          calculateTimeStamp(element.checkOut)
        )
      );
    });

    return filtered.length > 0 ? false : true;
  },
}));

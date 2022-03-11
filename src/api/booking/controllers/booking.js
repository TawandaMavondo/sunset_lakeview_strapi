"use strict";

/**
 *  booking controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::booking.booking", ({ strapi }) => ({
    
  validate() {
    strapi.service("api::booking.booking").validate();
  },
}));

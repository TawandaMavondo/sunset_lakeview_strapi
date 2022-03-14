'use strict';

/**
 * `rooms` middleware.
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    await next();
  };
};

'use strict';

/**
 * A set of functions called "actions" for `available`
 */

module.exports = {
  index: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};

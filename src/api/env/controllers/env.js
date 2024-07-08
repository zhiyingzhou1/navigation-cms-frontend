'use strict';

/**
 * env controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::env.env');

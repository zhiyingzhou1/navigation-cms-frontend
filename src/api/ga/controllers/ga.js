'use strict';

/**
 * ga controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ga.ga');

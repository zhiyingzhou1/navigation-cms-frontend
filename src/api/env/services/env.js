'use strict';

/**
 * env service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::env.env');

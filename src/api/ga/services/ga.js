'use strict';

/**
 * ga service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ga.ga');

'use strict';

/**
 * database-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::database-test.database-test');

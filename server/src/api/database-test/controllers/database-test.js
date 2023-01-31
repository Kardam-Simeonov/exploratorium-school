'use strict';

/**
 * database-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::database-test.database-test');

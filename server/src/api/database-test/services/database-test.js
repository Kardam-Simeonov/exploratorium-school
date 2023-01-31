'use strict';

/**
 * database-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::database-test.database-test');

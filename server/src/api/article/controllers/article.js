'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({

    // Override the findOne method to use the slug instead of the id
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::article.article').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));

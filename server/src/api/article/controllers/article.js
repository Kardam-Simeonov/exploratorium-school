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
        entity.content = entity.content.replace(/\!\[(.*?)\]\((\/uploads\/[\w-]+\.\w+)\)/g, `![\$1](${strapi.config.get('server.url')}\$2)`); // Modify the content to use the full image URL
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));

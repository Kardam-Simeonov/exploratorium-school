const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', crypto.randomBytes(16).toString('hex')),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', crypto.randomBytes(16).toString('hex')),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', crypto.randomBytes(16).toString('hex')),
    },
  },
});
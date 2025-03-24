const crypto = require('crypto');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('SERVER_URL'),
  app: {
    keys: env.array('APP_KEYS', [crypto.randomBytes(16).toString('hex')]),
  },
});

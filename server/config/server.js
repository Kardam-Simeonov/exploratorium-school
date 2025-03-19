const crypto = require('crypto');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://127.0.0.1'),
  app: {
    keys: env.array('APP_KEYS', [crypto.randomBytes(16).toString('hex')]),
  },
});

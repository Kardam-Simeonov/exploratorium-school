module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', 
  connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi-db'),
        user: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'avitohol'),
        ssl: env.bool("DATABASE_SSL", false) && {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      },
      },
      debug: false,
  },
});
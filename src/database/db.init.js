/* eslint-disable no-console */

const Sequelize = require('sequelize');

const init = (config) => {
  const dbConnection = new Sequelize(config.DATABASE_NAME, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    pool: config.POOL,
    logging: false,
  });
  try {
    dbConnection.authenticate();
    console.log('Connected to datababse:', config.DATABASE_NAME);

    process.on('SIGINT', () => {
      dbConnection.close().then(() => {
        process.exit(0);
      });
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
    throw new Error(err);
  }

  return {
    Sequelize,
    conn: dbConnection,
  };
};

module.exports = {
  init,
};

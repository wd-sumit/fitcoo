const config = require('../config/database');
const db = require('../database/db.init');

const { conn } = db.init(config);

const UserModel = require('./user.model');

const models = {
  conn,
  User: UserModel.modelClass.init(UserModel.modelFields, {
    ...UserModel.options,
    sequelize: conn
  })
};

// Object.keys(modelList).forEach((model) => {
//   models[model] = modelList[model].modelClass.init(modelList[model].modelFields, {
//     ...modelList[model].options,
//     sequelize: conn,
//   });
// });

// models.MLAnMLCMember.belongsTo(models.MLAnMLC, {
//   foreignKey: 'mlaNMlcId',
//   targetKey: 'id',
//   as: 'organisation',
// });

// Support Migrations
if (process.env.NODE_ENV !== 'production') {
  // conn.sync().then(() => {
  //   // models.Language.bulkCreate([
  //   //   { id: 'hi', displayName: 'हिंदी' },
  //   //   { id: 'en', displayName: 'English' },
  //   //   { id: 'mr', displayName: 'मराठी' },
  //   // ]);
  // });
}

module.exports = models;

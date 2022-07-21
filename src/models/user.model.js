const { Model, DataTypes } = require('sequelize');
const { hash, compare } = require('bcryptjs');

const modelFields = {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  fax: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  // bank_name: {
  //   type: DataTypes.STRING,
  // },
  // account_number: {
  //   type: DataTypes.INTEGER,
  // },
  // iban_number: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  // },
  // branch_location: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  // },
  // country_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  // },
  // privilege: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  // },
  // username: {
  //   type: DataTypes.STRING,
  // },
  // usertype: {
  //   type: DataTypes.ENUM,
  //   values: ['A', 'M', 'O', 'S'],
  // },
  // hub_name: {
  //   type: DataTypes.STRING,
  // },

  // entrydate: {
  //   // reference code eg: C001
  //   type: DataTypes.DATE,
  // },
  // onlinestatus: {
  //   // userId of user who refered current user
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // status: {
  //   // userId of user who refered current user
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // deleted: {
  //   // userId of user who refered current user
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // call_record: {
  //   // userId of user who refered current user
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // logopath: {
  //   type: DataTypes.STRING,
  // },
  // user_name: {
  //   type: DataTypes.STRING,
  // },
  // company: {
  //   type: DataTypes.STRING,
  // },
  // city: {
  //   type: DataTypes.INTEGER,
  // },
  // uniqueid: {
  //   type: DataTypes.STRING,
  // },
  // super_id: {
  //   type: DataTypes.INTEGER,
  // },
  // client_type: {
  //   type: DataTypes.STRING,
  // },
  // template_id: {
  //   type: DataTypes.INTEGER,
  // },
  // vat_no: {
  //   type: DataTypes.STRING,
  // },
  // cr_no: {
  //   type: DataTypes.STRING,
  // },
  // upload_contact: {
  //   type: DataTypes.STRING,
  // },
  // upload_vat: {
  //   type: DataTypes.STRING,
  // },
  // contact_date: {
  //   type: DataTypes.STRING,
  // },
  // system_access: {
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // system_access_fm: {
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // user_type: {
  //   type: DataTypes.INTEGER,
  // },
  // is_deleted: {
  //   type: DataTypes.INTEGER,
  // },
  // wh_id: {
  //   type: DataTypes.INTEGER,
  // },
  // per_day_target: {
  //   type: DataTypes.INTEGER,
  // },
  // today_target: {
  //   type: DataTypes.INTEGER,
  // },
  // batch_no: {
  //   type: DataTypes.INTEGER,
  // },
  // assign_time: {
  //   type: DataTypes.STRING,
  // },
  // day_off: {
  //   type: DataTypes.STRING,
  // },

  // day_on: {
  //   type: DataTypes.STRING,
  // },
  // auto_status: {
  //   type: DataTypes.ENUM,
  //   values: ['Y', 'N'],
  // },
  // upload_site_logo: {
  //   type: DataTypes.STRING,
  // },
};

class User extends Model {}

const handleBeforeUserCreateHook = (user, options) => {
  user.password = hash(user.pa)
};

module.exports = {
  modelClass: User,
  modelFields,
  hooks: {
    beforeCreate: handleBeforeUserCreateHook,
  },
};

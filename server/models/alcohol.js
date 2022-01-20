"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class alcohol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alcohol.hasMany(models.dish);
    }
  }

  alcohol.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      content: DataTypes.STRING,
      img: DataTypes.STRING,
      pairdish: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "alcohol",
    }
  );
  return alcohol;
};

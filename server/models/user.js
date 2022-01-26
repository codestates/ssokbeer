"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.content, { foreignKey: "userId" });
      user.hasMany(models.comment, { foreignKey: "userId" });
      user.hasMany(models.like, { foreignKey: "userId" });
    }
  }
  user.init(
    {
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING(2048),
      likeId: DataTypes.INTEGER,
      contentId: DataTypes.INTEGER,
      commentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

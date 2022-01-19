"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.contents, { foreignKey: "usersId" });
      users.hasMany(models.comments, { foreignKey: "usersId" });
      users.hasMany(models.likes, { foreignKey: "userId" });
    }
  }
  users.init(
    {
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      contentId: DataTypes.INTEGER,
      commentId: DataTypes.INTEGER,
      likeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};

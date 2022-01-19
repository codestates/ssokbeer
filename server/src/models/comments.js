"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      comments.belongsTo(models.contents, { as: "cmct", foreignKey: "contentsId" });
      comments.belongsTo(models.users, { foreignKey: "usersId" });
    }
  }
  comments.init(
    {
      usersId: DataTypes.INTEGER,
      nickname: DataTypes.STRING,
      content: DataTypes.STRING,
      contentsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return comments;
};

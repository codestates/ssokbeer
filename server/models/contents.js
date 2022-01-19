"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contents.belongsTo(models.users, { foreignKey: "usersId" });
      contents.hasMany(models.comments, { foreignKey: "contentsId" });
      contents.hasMany(models.likes, { foreignKey: "contentId" });
    }
  }
  contents.init(
    {
      img: DataTypes.STRING,
      content: DataTypes.STRING,
      visits: { type: DataTypes.INTEGER, defaultValue: 0 },
      likesId: { type: DataTypes.INTEGER, defaultValue: 0 },
      commentsId: DataTypes.INTEGER,
      usersId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "contents",
    }
  );
  return contents;
};

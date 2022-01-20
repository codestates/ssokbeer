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
    }
  }
  contents.init(
    {
      title: DataTypes.STRING,
      img: DataTypes.STRING,
      content: DataTypes.STRING,
      visits: { type: DataTypes.INTEGER, defaultValue: 0 },
      commentsId: DataTypes.INTEGER,
      usersId: DataTypes.INTEGER,
      likes: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "contents",
    }
  );
  return contents;
};

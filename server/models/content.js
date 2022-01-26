"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      content.belongsTo(models.user, { foreignKey: "userId" });
      content.hasMany(models.comment, { foreignKey: "contentId" });
    }
  }
  content.init(
    {
      img: DataTypes.STRING,
      content: DataTypes.STRING,
      title: DataTypes.STRING,
      like: { type: DataTypes.INTEGER, defaultValue: 0 },
      visit: { type: DataTypes.INTEGER, defaultValue: 0 },
      nickname: DataTypes.STRING,
      commentId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "content",
    }
  );
  return content;
};

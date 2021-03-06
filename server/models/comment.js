"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      comment.belongsTo(models.content, { as: "cmct", foreignKey: "contentId", onDelete: "CASCADE" });
      comment.belongsTo(models.user, { foreignKey: "userId" });
    }
  }

  comment.init(
    {
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      contentId: DataTypes.INTEGER,
      nickname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};

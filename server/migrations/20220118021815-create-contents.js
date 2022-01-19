"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      likeId: {
        type: Sequelize.INTEGER,
      },
      visits: {
        type: Sequelize.INTEGER,
      },
      commentsId: {
        type: Sequelize.INTEGER,
      },
      usersId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contents");
  },
};

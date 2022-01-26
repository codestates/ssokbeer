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
      title: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      like: {
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      visit: {
        type: Sequelize.INTEGER,
      },
      commentId: {
        type: Sequelize.INTEGER,
      },
      userId: {
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

"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dishes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      alcoholId: {
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
    await queryInterface.dropTable("dishes");
  },
};

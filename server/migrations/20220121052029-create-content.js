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
<<<<<<< HEAD:server/migrations/20220118021815-create-contents.js
      title: {
        type: Sequelize.STRING,
      },
      likesId: {
=======
      like: {
>>>>>>> dc9bca0f11c49ed84ce869bed6c254bc9f8af591:server/migrations/20220121052029-create-content.js
        type: Sequelize.INTEGER,
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

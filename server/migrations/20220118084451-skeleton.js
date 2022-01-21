"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * { type: Sequelize.STRING }
    //  */
    // return queryInterface.addColumn("content", "title", { type: Sequelize.STRING });
    // return queryInterface.removeColumn("contents", "likesId");
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};

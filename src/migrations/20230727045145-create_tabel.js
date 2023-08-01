'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: "int(11)"
      },
      user_name: { type: "varchar(255)" },
      full_name: { type: "varchar(255)" },
      password: { type: "varchar(255)" },
      phone: { type: "varchar(255)" },
      email: { type: "varchar(255)" },
      role: { type: "varchar(255)" },
      created_at: { allowNull: false, type: "datetime" },
      updated_at: { type: "datetime" },
      deleted_at: { type: "datetime" }
    });
    await queryInterface.createTable('user_tokens', {
      id: {
        allowNull: false, autoIncrement: true,
        primaryKey: true,
        type: "int(11)"
      },
      user_id: { type: "int(11)" },
      client_id: { type: "varchar(255)" },
      token: { type: "varchar(255)" },
      device: { type: "varchar(255)" },
      time_expired: { type: "datetime" },
      created_at: { type: "datetime" },
      updated_at: { type: "datetime" },
      deleted_at: { type: "datetime" }
    });
    await queryInterface.createTable('firebase_token', {
      id: {
        allowNull: false, autoIncrement: true,
        primaryKey: true,
        type: "int(11)"
      },
      user_id: { type: "int(11)" },
      client_id: { type: "varchar(255)" },
      token: { type: "varchar(255)" },
      created_at: { type: "datetime" },
      updated_at: { type: "datetime" },
      deleted_at: { type: "datetime" }
    });
    await queryInterface.createTable('card', {
      id: {
        allowNull: false, autoIncrement: true,
        primaryKey: true,
        type: "int(11)"
      },
      user_id: { type: "int(11)" },
      data: { type: "varchar(255)" },
      created_at: { allowNull: false, type: "datetime" },
      updated_at: { type: "datetime" },
      deleted_at: { type: "datetime" }
    });
    await queryInterface.createTable('room', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: "int(11)" },
      user_create: { type: "int(11)" },
      status: { type: "int(11)" },
      count_user: { type: "int(11)" },
      time_start: { type: "datetime" },
      time_end: { type: "datetime" },
      created_at: { allowNull: false, type: "datetime" },
      updated_at: { type: "datetime" },
      deleted_at: { type: "datetime" }
    });
    await queryInterface.createTable('room_user', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: "int(11)" },
      room_id: { type: "int(11)" },
      user_id: { type: "int(11)" },
      card_id: { type: "int(11)" },
      time_start: { type: "datetime" },
      time_end: { type: "datetime" },
      created_at: { allowNull: false, type: "datetime" },
      updated_at: { type: "datetime" },
      deleted_at: { type: "datetime" }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

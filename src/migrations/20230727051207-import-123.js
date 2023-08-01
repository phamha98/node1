'use strict';
const bcrypt = require('bcrypt')
const moment = require('moment')
const { getRandomLastName, getRandomPhoneNumber, getRandomEmail, getRandomDate } = require('../lib/config');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const admin = await queryInterface.bulkInsert('user', [{
      user_name: 'admin',
      full_name: 'admin',
      role: 'admin',
      email: "admin@gmail.com",
      password: await bcrypt.hash('admin', 10),
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    }], {});
    ////
    let arr = [...new Array(10).keys()]
    let data = []
    for await (let item of arr) {
      let item = {
        full_name: getRandomLastName(),
        phone: getRandomPhoneNumber(),
        created_at: getRandomDate(),
        role: 'client',
      }
      item.email = item.full_name + '@gmail.com'
      item.user_name = item.full_name
      item.password = await bcrypt.hash(item.user_name, 10)
      data.push(item)
    }
    await queryInterface.bulkInsert('user', data, {});

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

'use strict';
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface) => {
    const hashedPassword = await bcrypt.hash("admin", 10);
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin User',
        email: "admin@gmail.com",
        phoneNumber: "9999999999",
        password: hashedPassword,
        isVerified: true,
        loginOtp: 0,
        userStatus:"Active",
        country:"1",
        state:"1",
        city:"1",
        company:"web2export",
        userType:"Seller",
        roles:"Admin",
        terms: true
      },
    ], {});

   
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

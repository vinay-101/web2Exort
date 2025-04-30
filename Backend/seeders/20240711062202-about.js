"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "about_us",
      [    
        { title:"About us", createdAt:new Date(), updatedAt: new Date()},
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("about_us", null, {});
  },
};

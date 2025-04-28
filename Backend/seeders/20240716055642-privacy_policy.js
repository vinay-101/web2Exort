"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "privacy_policies",
      [    
        { desc:"Privacy and Policy", lang:"en",  createdAt:new Date(), updatedAt: new Date()},
        // { desc:"गोपनीयता और नीति",  lang:"hi",  createdAt:new Date(), updatedAt: new Date()},
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("privacy_policies", null, {});
  },
};

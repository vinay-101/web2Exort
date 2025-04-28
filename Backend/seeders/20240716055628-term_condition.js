"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "term_conditions",
      [    
        { desc:"Term and Condition", lang:"en",  createdAt:new Date(), updatedAt: new Date()},
        // { desc:"नियम और शर्तें",  lang:"hi",  createdAt:new Date(), updatedAt: new Date()},
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("term_conditions", null, {});
  },
};

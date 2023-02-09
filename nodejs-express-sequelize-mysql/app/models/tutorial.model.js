module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    class:{
      type: Sequelize.STRING
    },
    birth:{
      type: Sequelize.DATEONLY
    },
    grade:{
      type: Sequelize.STRING
    },
    gender:{
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};

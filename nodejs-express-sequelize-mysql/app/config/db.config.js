module.exports = {
  HOST: "0.0.0.0",
  USER: "admin",
  PASSWORD: "password",
  DB: "vue",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};


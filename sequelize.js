const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-05:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    socketPath: "/var/run/mysqld/mysqld.sock",
  },
});

const db = {};

db.Op = Sequelize.Op;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./models/users")(sequelize, Sequelize);
db.sigecos = require("./models/sigecos")(sequelize, Sequelize);

db.users.hasOne(db.sigecos);
db.sigecos.belongsTo(db.users);

sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log("Database & tables created!");
  });

module.exports = db;
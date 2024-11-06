module.exports = (sequelize, type) => {
  return sequelize.define("attendance", {
    latitude: type.STRING,
    longitude: type.STRING
  });
};

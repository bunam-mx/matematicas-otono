module.exports = (sequelize, type) => {
  return sequelize.define("workshops", {
    title: type.STRING,
    bio: type.STRING,
    manuscript: type.STRING,
    status: type.INTEGER
  });
};

module.exports = (app) => {
  app.route("/users").get(function (req, res) {
    res.json({ message: "Hello user" });
  });
};

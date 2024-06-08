const express = require("express"),
  db = require("../sequelize"),
  app = express(),
  crypto = require("crypto"),
  secret = "matematicasotono";

module.exports = (app) => {
  app.route("/users").post(function (req, res) {
    const hash = crypto
      .createHash("sha256", secret)
      .update(req.body.email + req.body.password)
      .digest("hex");
    const password = crypto
      .createHash("sha256", secret)
      .update(req.body.password)
      .digest("hex");
    
    db.users
      .findAll({
        where: {
          email: req.body.email,
        },
      })
      .then((user) => {
        if (user.length > 0) {
          res.json({
            error: "El correo electrónico ya se encuentra registrado",
          });
        } else {
          db.sigecos
            .findAll({
              where: {
                curp: req.body.curp,
              },
            })
            .then((sigeco) => {
              if (sigeco.length > 0) {
                res.json({ error: "El CURP ya se encuentra registrado" });
              } else {
                db.users
                  .create({
                    email: req.body.email,
                    password: password,
                    active: false,
                    hash: hash,
                  })
                  .then((user) => {
                    db.sigecos
                      .create({
                        userId: user.id,
                        name: req.body.name,
                        lastname: req.body.lastname,
                        entity: req.body.entity,
                        account: req.body.account,
                        curp: req.body.curp,
                        studyLevel: req.body.studyLevel,
                      })
                      .then((sigeco) => {
                        user.sendWelcomeEmail().then((sendMail) => {
                          if (sendMail.accepted) {
                            res.json({ messageId: sendMail.messageId });
                          } else {
                            res.json({ error: "Error to send email messages" });
                          }
                        });
                      });
                  });
              }
            });
        }
      });
  });
};

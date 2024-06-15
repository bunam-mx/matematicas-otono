const express = require("express"),
  db = require("../sequelize"),
  app = express(),
  crypto = require("crypto"),
  secret = "matematicasotono",
  nodemailer = require("nodemailer"),
  urlDestiny = process.env.URL_DESTINY;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendRecoveryEmail = async (email, hash) => {
  const mailOptions = {
    from: '"Matemáticas en otoño" <bunam_apps@cuaed.unam.mx>',
    to: email,
    subject: "🔐 Has solicitado la recuperación de tu contraseña",
    text: `Hemos recibido una solicitud para recuperar tu contraseña, si no has sido tú puedes hacer caso omiso de este correo. No te preocupes que este proceso solo se realiza a través de tu cuenta de correo registrada en nuestra plataforma. Para recuperar tu contraseña, por favor accede al siguiente enlace: ${urlDestiny}/recovery/${hash}`,
    html: `<div style="font-size: 24px"><p>Hemos recibido una solicitud para recuperar tu contraseña, si no has sido tú puedes hacer caso omiso de este correo. No te preocupes que este proceso solo se realiza a través de tu cuenta de correo registrada en nuestra plataforma.</p><p>Para recuperar tu contraseña, por favor accede al siguiente <a href="${urlDestiny}/recovery/${hash}">enlace</a>.</p></div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.log("Error to send email messages", error);
    return error;
  }
};

const sendConfirmationChangePassword = async (email) => {
  const mailOptions = {
    from: 'Matemáticas en otoño" <bunam_apps@cuaed.unam.mx>',
    to: email,
    subject: "🔑 Has realizado un cambio de tu contraseña",
    text: `Hemos procesado tu cambio de contraseña. Ahora puedes ingresar a la plataforma con tu nueva contraseña.`,
    html: `<div style="font-size: 24px"><p>Hemos procesado tu cambio de contraseña.</p><p>Ahora puedes ingresar a la plataforma con tu nueva contraseña.</p><p>Da clic en el siguiente <a href="${urlDestiny}" target="_blank">enlace</a> para ir a la plataforma.</p></div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.log("Error to send email messages", error);
    return error;
  }
};

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
                    usertype: req.body.usertype,
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

  app.route("/users/login").post(function (req, res) {
    db.users
      .findOne({
        where: {
          email: req.body.email,
          password: crypto
            .createHash("sha256", secret)
            .update(req.body.password)
            .digest("hex"),
        },
      })
      .then((user) => {
        if (user && user.active === 1) {
          db.sigecos
            .findOne({
              where: {
                userId: user.id,
              },
            })
            .then((sigeco) => {
              res.json({
                id: user.id,
                email: user.email,
                name: sigeco.name,
                lastname: sigeco.lastname,
                usertype: user.usertype,
              });
            });
        } else {
          if (user && user.active === false) {
            res.json({ error: "Usuario inactivo" });
          } else {
            res.json({ error: "Usuario o contraseña incorrectos" });
          }
        }
      });
  });

  app.route("/users/recoverypassword").post(function (req, res) {
    const hash = crypto.randomBytes(32).toString("hex");
    db.users
      .update(
        { hash: hash },
        {
          where: {
            email: req.body.email,
          },
        }
      )
      .then((user) => {
        if (user[0] === 0) {
          res.json({ user: false });
        } else {
          sendRecoveryEmail(req.body.email, hash).then((sendMail) => {
            res.json({ user: sendMail.messageId });
          });
        }
      });
  });

  app.route("/users/validatehash").post(function (req, res) {
    db.users
      .findOne({
        where: {
          hash: req.body.hash,
        },
      })
      .then((user) => {
        if (user) {
          res.json({ date: user.updatedAt });
        } else {
          res.json({ date: false });
        }
      });
  });

  app.route("/users/changepassword").post(function (req, res) {
    const newHash = crypto.randomBytes(32).toString("hex");
    const newPassword = crypto
      .createHash("sha256", secret)
      .update(req.body.password)
      .digest("hex");

    db.users
      .update(
        {
          password: newPassword,
          hash: newHash,
        },
        {
          where: {
            hash: req.body.hash,
            updatedAt: req.body.updatedAt,
          },
        }
      )
      .then((user) => {
        if (user[0] === 0) {
          res.json({ newPassword: false });
        } else {
          db.users
            .findOne({
              where: {
                hash: newHash,
                password: newPassword,
              },
            })
            .then((sendUser) => {
              sendConfirmationChangePassword(sendUser.email).then(() => {
                res.json({ newPassword: true });
              });
            });
        }
      });
  });

  app.route("/users/activate/:hash").get(function (req, res) {
    db.users
      .findOne({
        where: {
          hash: req.params.hash,
        },
      })
      .then((user) => {
        if (user) {
          user
            .update({
              active: true,
            })
            .then(() => {
              res.json({ active: true, usertype: user.usertype });
            });
        } else {
          res.json({ active: false });
        }
      });
  });
};

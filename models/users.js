const nodemailer = require("nodemailer"),
  urlDestiny = process.env.URL_DESTINY;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = (sequelize, type) => {
  const Users = sequelize.define("users", {
    email: type.STRING,
    password: type.STRING,
    active: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    hash: type.STRING,
    usertype: type.INTEGER,
  });

  Users.prototype.sendWelcomeEmail = async function () {
    const mailOptions = {
      from: '"Matemáticas en otoño" <bunam_apps@cuaed.unam.mx>',
      to: this.email,
      subject: "✅ Comencemos validando tu registro",
      text: `Te damos la bienvenida al sitio web de Matemáticas en otoño. Para comenzar a utilizar tu cuenta, por favor valida tu correo electrónico a través del siguiente enlace: ${urlDestiny}/activate/${this.hash}`,
      html: `<div style="font-size: 24px"><p>Te damos la bienvenida al sitio web de <strong>Matemáticas en otoño</strong>.</p><p>Para comenzar a utilizar tu cuenta, por favor valida tu correo electrónico a través del siguiente <a href="${urlDestiny}/activate/${this.hash}">enlace</a>.</p></div>`,
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

  return Users;
};

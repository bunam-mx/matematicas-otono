const express = require("express"),
  db = require("../sequelize"),
  path = require("path"),
  app = express();

module.exports = (app) => {
  app.route("/workshops").post(function (req, res) {
    let manuscriptFile = req.files.manuscript;
    let bioFile = req.files.bio;

    let manuscriptFilename = `${
      path.parse(manuscriptFile.name).name
    }-${Date.now()}${path.extname(manuscriptFile.name)}`;
    let bioFilename = `${
      path.parse(bioFile.name).name
    }-${Date.now()}${path.extname(bioFile.name)}`;

    manuscriptFile.mv(`./uploads/${manuscriptFilename}`, (err) => {
      if (err) return res.status(500).json({ message: err });
      bioFile.mv(`./uploads/${bioFilename}`, (err) => {
        if (err) return res.status(500).json({ message: err });
        db.workshops
          .create({
            title: req.body.title,
            bio: bioFilename,
            manuscript: manuscriptFilename,
            status: 0,
            userId: req.body.userid,
          })
          .then((workshop) => {
            if(!workshop)
              return res.status(500).json({message: 'Error al registrar la ponencia'});
            res.json(workshop);
          });
      });
    });
    /*
    
      */
  });
};

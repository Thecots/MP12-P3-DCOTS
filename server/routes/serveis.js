const express = require("express");
const bcrypt = require("bcryptjs");
const Servei = require("../models/servei");
const app = express();

/* get */
app.get("/servei", (req, res) => {
    Servei.find().exec((err, serveis) => {
        if (err) {
        return res.status(400).json({
            ok: false,
            err,
        });
        }
        res.json({
            ok: true,
            serveis,
        });
    });
});

app.put("/servei", (req, res) => {
    const {product, amount, selled, lastsell, insell} = req.body;
    let servei = new Servei({
        product,
        amount,
        selled,
        lastsell,
        insell
    });
  
    servei.save((err, servei) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        user: servei,
      });
    });
});

module.exports = app;

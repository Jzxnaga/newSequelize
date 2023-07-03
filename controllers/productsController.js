const db = require("../models");
const { Products } = require("../models");
const { OAuth2Client } = require("google-auth-library");

const GoOgLeClIenTId =
  "910125984344-r777suv4spdihapbugrtebjebok9e0aa.apps.googleProductscontent.com";
// harusnya di taro di ENV

const Sequelize = require("sequelize");

const axios = require("axios");

// const Sequelize = sequelize.Sequelize;

class ProductsController {
  static async findAll(req, res, next) {
    Products.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = ProductsController;

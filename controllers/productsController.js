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
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
        console.log("yawlohhhh");
      })
  }
  static async haha(req,res,next){
    Products.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
  static async hihi(req,res,next){
    Products.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  
  static async huhu(req,res,next){
    Products.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
      .catch((err) => {
        console.log('done dini')
        next(err);
      });
  }

  static async findAll(req, res, next) {
    Products.findAll()
      .then((data) => {
        next(err)
        next(err)
        next(err)
        
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
        next(err)
      });
  }
}

module.exports = ProductsController;

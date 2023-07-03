
const db = require ("../models");
const { User } = require ("../models");
const {OAuth2Client} = require ('google-auth-library')

const GoOgLeClIenTId = "910125984344-r777suv4spdihapbugrtebjebok9e0aa.apps.googleusercontent.com"
// harusnya di taro di ENV

const Sequelize = require('sequelize');

const axios = require('axios');

// const Sequelize = sequelize.Sequelize;


class UserController{
  static async findAll(req,res,next){
    User.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
  
}

module.exports = UserController;
const { sequelize } = require("sequelize");
const { employees } = require("../models");
const Sequelize = require('../models').sequelize;
const fetch = require("node-fetch");

const Query = {
    getEmployee: async() => {
        try {
            Employees = await employees.findAll({ order: Sequelize.random(), limit: 5 });
            return Employees;
        }catch(err){
            console.log(err)
        }
    },
    getCountry: async() => {
        const response = await fetch(`https://be3bbiiym5.execute-api.us-east-1.amazonaws.com/default/random_country`)
        const doc = await response.json();
        return doc.data;
    }
}

module.exports = { Query }
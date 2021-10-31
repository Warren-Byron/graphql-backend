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
        const response = await fetch(`https://op8vkegov9.execute-api.eu-west-1.amazonaws.com/default/guessCountry`)
        const doc = await response.json();
        return doc.data;
    },
    getMetadata: async() => {
        const response = await fetch(`curl --silent http://169.254.169.254/latest/dynamic/instance-identity/document`)
        const doc = await response.json();
        return doc.data;
    }
}

module.exports = { Query }
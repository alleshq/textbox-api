const credentials = require("../credentials");
const Sequelize = require("sequelize");

//Create Instance
const sequelize = new Sequelize(credentials.db.name, credentials.db.username, credentials.db.password, {
    host: credentials.db.host,
    dialect: "mariadb",
    logging: false,
    dialectOptions: {
        timezone: "Etc/GMT0"
    }
});
module.exports = sequelize;

//Document
sequelize.Document = sequelize.define("document", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.UUID,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    markdown: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    highlight: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    paranoid: true
});
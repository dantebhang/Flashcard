const path = require("path");
require("dotenv").config();

const { DEVELOPMENT_DATABASE_URL, PRODUCTION_DATABASE_URL } = process.env;

module.exports = {
	development: {
		client: "postgresql",
		connection: DEVELOPMENT_DATABASE_URL,
		migrations: {
			directory:  path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: path.join(__dirname, "src", "db", "seeds"),
	},

	testing: {
		client: "postgresql",
		connection: DEVELOPMENT_DATABASE_URL,
		migrations: {
			directory:  path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: path.join(__dirname, "src", "db", "seeds"),
	},

	production: {
		client: "postgresql",
		connection: PRODUCTION_DATABASE_URL,
		migrations: {
			directory:  path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: path.join(__dirname, "src", "db", "seeds"),
	},
};

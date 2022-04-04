// https://pm2.keymetrics.io/docs/usage/application-declaration/
const fs = require("fs");
const config = "./.env";
const discordData = "../discord-data/feedbot";
const outLogFile = "./logs/pm2_output.log";
const errorLogFile = "./logs/pm2_error.log";

const copyConfig = async () => {
	fs.copyFile(`${discordData}/.env`, config, (err) => {
		if (err) throw err;
	});
};

if (fs.existsSync(discordData)) {
	copyConfig();
}

module.exports = {
	apps: {
		name: "Feedbot",
		script: "./bot.js",
		out_file: outLogFile,
		error_file: errorLogFile,
	}
};
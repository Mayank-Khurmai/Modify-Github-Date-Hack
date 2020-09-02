const jsonfile = require("jsonfile");
const moment = require("moment");

const FILE_PATH = "./data.json";
const DATE = moment().format();

const json_data = {
    date : DATE
}

jsonfile.writeFile(FILE_PATH, json_data);

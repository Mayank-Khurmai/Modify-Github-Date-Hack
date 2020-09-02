const jsonfile = require("jsonfile");
const moment = require("moment");
const simplegit = require("simple-git");

const FILE_PATH = "./data.json";
const DATE = moment().subtract(4,"d").format();

const json_data = {
    date : DATE
}

jsonfile.writeFile(FILE_PATH, json_data);
// git commit --date="2020-08-29T15:49:54+05:30"
simplegit().add([FILE_PATH]).commit(DATE, {'--date':DATE}).push();
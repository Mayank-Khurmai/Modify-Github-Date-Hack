const jsonfile = require("jsonfile");
const moment = require("moment");
const simplegit = require("simple-git");
const random = require("random");
var random_number = random.int(0,365);

const FILE_PATH = "./data.json";


// jsonfile.writeFile(FILE_PATH, json_data);
// To obtain final command ==> git commit --date="2020-08-29T15:49:54+05:30"
// simplegit().add([FILE_PATH]).commit(DATE, {'--date':DATE}).push();
// For working synchronously , we can write the above code as with loop



var i=0;
var commit_loop = setInterval(start_commit, 10000);

function start_commit(){
    i++;
    var DATE = moment().subtract(121+i,"d").format();

    const json_data = {
        date : DATE
    }
    
    jsonfile.writeFile(FILE_PATH, json_data, ()=>{
        simplegit().add([FILE_PATH]).commit(DATE, {'--date':DATE}).push();
        if(i==3){ stop_commit() }
    });
}

function stop_commit(){
        clearInterval(commit_loop);
}

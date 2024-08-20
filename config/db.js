const mongoose = require('mongoose');
exports.dbConnection = () => {
    mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`).then(()=>{
        console.log("DB connection successfull");
    })
    .catch((error)=>{
        console.log("Some error occured while make connection to DB " + error);
    });
}
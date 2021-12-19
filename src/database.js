const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI)
    .then((db) => console.log("Conexión establecida"))
    .catch((err) => console.log(err));


module.exports = mongoose; 

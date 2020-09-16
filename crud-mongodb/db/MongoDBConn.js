var mongoose = require('mongoose');//importando biblioteca do mongoose

mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://127.0.0.1:27017/crud';
mongoose.connect(mongoDB_URI, { useNewUrlParser: true }); //conectando o BD

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose Connected to ' + mongoDB_URI);
});
db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB_URI);
});
db.on('error', (err) => {
    console.log('Mongoose Error: ' + err);
});
 

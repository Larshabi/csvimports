const express = require('express');
const fileUpload = require('express-fileupload');
const http = require('http');
const template = require('./template');
const mongoose = require('mongoose');
const upload = require('./upload');
const app = express();
const server = http.Server(app);

app.use(fileUpload());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/template', template.get);
app.post('/', upload.post )

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/csvimport', options)
    .then(() => {
        console.log(`Mongoose default connection to mongodb://127.0.0.1:27017/csvimport`)
    });;

server.listen(8000, ()=>{
    console.log('Server started on port 8000')
})

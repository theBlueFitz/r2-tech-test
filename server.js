const apiRouter = require('./routes/api');
const express = require('express')

const server = express();

server.use(express.json())

server.use('/api', apiRouter);

server.all("/*", (req, res) => {
    res.status(400).send({msg : 'Path not found'})
});


module.exports = server;

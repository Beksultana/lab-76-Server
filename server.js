const express = require('express');
const fileDb = require('./FileDb');
const messages = require('./src/messages');
const cors = require('cors');
const app = express();
fileDb.init();

app.use(express.json());
app.use(cors());

const port = 9000;

app.use('/messages', messages);

app.listen(port, () => {
    console.log(`Started server ${port} port!`);
});
const express = require('express');
const fileDb = require('./FileDb');
const messages = require('./src/messages');
const cors = require('cors');
const app = express();
const port = 8000;
fileDb.init();

app.use(express.json());
app.use(cors());

app.use('/messages', messages);

app.listen(port, () => {
    console.log(`Started server ${port} port!`);
});
const express = require('express');
const fileDb = require('../FileDb');
const router = express.Router();

router.get('/:date', (req , res) => {
    if(req.params) {
        res.send(fileDb.getItems(req.params.date))
    } else {
        res.send({message: 'No date provided'})
    }
});

router.get('/', (req, res) => {
    res.send(fileDb.sendData())
});

router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.author !== "" && req.body.message !== "") {
        fileDb.addItem(req.body);
        res.send({message: "OK"})
    } else {
        res.status(400).send({message: 'Нет автора или собщения'})
    }

});

module.exports = router;
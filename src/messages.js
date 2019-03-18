const express = require('express');
const fileDb = require('../FileDb');
const router = express.Router();

router.get('/', (req , res) => {
   res.send(fileDb.getItems())
});

router.get('/:data', (req , res) => {
    res.send(fileDb.getItems())
});

router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.author !== "" && req.body.message !== "") {
        fileDb.addItem(req.body);
        res.send({message: "OK"})
    } else {
        res.send({message: 'Нет автора или собщения'})
    }

});

module.exports = router;
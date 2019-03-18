const express = require('express');
const fileDb = require('../FileDb');
const router = express.Router();

router.get('/', (req , res) => {
    if(req.query.date) {
        const date = req.query.date;
        res.send(fileDb.getItems(req.query.date));
    } else {
        res.send(fileDb.sendData());
    }
});


router.post('/', (req, res) => {
    if (req.body.author !== "" && req.body.message !== "") {
        fileDb.addItem(req.body);
        res.send({message: "OK"})
    } else {
        res.status(400).send({message: 'Нет автора или собщения'})
    }

});

module.exports = router;
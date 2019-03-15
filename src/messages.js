const express = require('express');
// const nanoid = require();
const fileDb = require('../FileDb');
const router = express.Router();

router.get('/', (req , res) => {
   res.send(fileDb.getItems())
});

router.post('/', (req, res) => {
    fileDb.addItem(req.body);
    res.send({message: "OK"})
});

module.exports = router;
var express = require('express');
var router = express.Router();

var DisciplinaService = require('../services/DisciplinaService')

router.post('/register', function (req,res,next){
    DisciplinaService.register(req,res);
});

router.get('/list', function(req,res,next){
    DisciplinaService.list(req,res);
});

router.put('/update/:id', function(req,res,next){
    DisciplinaService.put(req,res);
});

router.delete('/delele/:id', function(req,res,next){
    DisciplinaService.delete(req,res);
});

router.get('/retrieve/:id', function(req,res,next){
    DisciplinaService.get(req,res);
});

module.exports = router


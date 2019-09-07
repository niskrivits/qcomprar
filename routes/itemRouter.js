var express = require('express');
var router = express.Router();


//const bodyParser = require('body-parser');
//sconst db = require('./db/db')




router.get('/api/v1/listaitens', (req, res) => {

    db.collection('itens').find().toArray(
        (err, resultset) => {
            console.log(resultset);
            res.status(200).send(
            {
                sucess: 'true',
                message: 'itens retrieved',
                itens: resultset 
            });
        });
});


router.post('/api/v1/insereitem', (request, res) => {

    //data = { _id : req.body._id , desc :  req.body.desc  };
    let data = request.query;
    console.log(data);
    db.collection('itens').insertOne( data, (err, result)=> {
        if (err) return console.log(err);
        res.status(200).send( {
            sucess: 'true',
            message: 'item inserido',
            itens: data 
        });
        });
});



router.delete('/api/v1/removeitem', (request, res) => {

    //data = { _id : req.body._id , desc :  req.body.desc  };
    let data = request.query;
    console.log(data);
    db.collection('itens').deleteOne( {_id: new mongodb.ObjectID(data._id)}, (err, result)=> {
        if (err) return console.log(err);
        res.status(200).send( {
            sucess: 'true',
            message: 'item removido',
            itens: data 
        });
        });
});


module.exports = router;


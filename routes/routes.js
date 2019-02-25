const express = require('express');

const router = express.Router();

const models = require('../models');

router.get('/', function (req, res) {
    res.send('hello world from routes');
  });

  console.log('New route available - http://localhost:3000/inventory')
  router.get('/inventory', async function (req, res) {
      models.POUpldMstr.findAll({
        }).then(function(data){
          res.send(data);
        })
    });
  
    console.log('New route available - http://localhost:3000/inventoryparams')
    router.get('/inventoryparams', async function (req, res) {
    console.log('req.query.poNo - ', req.query.poNo);
    // res.send(req.query.poNo);
       models.POUpldMstr.findAll({
         where: {'PO No': req.query.poNo}
         }).then(function(data){
           res.send(data);
         })
     });

     console.log('New route available - http://localhost:3000/inventoryparamsmultiple')
     router.get('/inventoryparamsmultiple', async function (req, res) {
     console.log('req.query.poNo - ', req.query.poNo);
     console.log('req.query.poItem - ', req.query.poItem);
     // res.send(req.query.poNo);
        models.POUpldMstr.findAll({
          where: {
            'PO No': req.query.poNo,
            'PO Item': req.query.poItem,
        }
          }).then(function(data){
            res.send(data);
          })
      });

      console.log('New route available - http://localhost:3000/users')
      router.get('/users', async function (req, res) {
          models.Users.findAll({
            where: {
              User: req.query.ntid,
           }
            }).then(function(data){
              res.send(data);
            })
        });
     
        router.post('/users', async function (req, res) {
          console.log('req.body', req.body)
          //res.send('Got It');
          models.Users.create(req.body).then(function(data){
              res.send(data);
            })
        });
              
console.log('routes.js module loaded')
module.exports = router;

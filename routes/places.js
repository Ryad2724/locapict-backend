var express = require('express');
var router = express.Router();

require('../models/connexion');

const fetch = require('node-fetch');
// const User = require('../models/users');
const Place = require('../models/places');

router.post('/', (req, res) => {
    // if (!checkBody(req.body, ['username', 'password'])) {
    //   res.json({ result: false, error: 'Missing or empty fields' });
    //   return;
    // }
  
   
    Place.findOne({ nickname: req.body.nickname, name: req.body.name }).then(data => {
      if (data === null) {
  
        const newPlace = new Place({
          nickname: req.body.nickname,
          name: req.body.name,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
        });
  
        newPlace.save().then(newDoc => {
          res.json({ result: true});
        });
      } else {
        // Place already exists in database
        res.json({ result: false, error: 'place already exists' });
      }
    });
  });

  router.get('/:nickname', (req, res) => {
    Place.find({ nickname: req.params.nickname }).then(data => {
      if (data) {
        res.json({ result: true, places: data });
      } else {
        res.json({ result: false, error: 'Nickname not found' });
      }
    });
  });

  router.delete('/', (req, res) => {
    Place.deleteOne({ nickname: req.body.nickname, name: req.body.name}).then(() => {

    res.json({result: true})
    
    });
  });


module.exports = router;
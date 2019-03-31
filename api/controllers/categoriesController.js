'use strict';

const fetch = require('node-fetch');

exports.get_category_list = function(req, res) {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(serviceRes => serviceRes.json())
    .then((serviceRes) =>{
        // console.log(serviceRes);
        res.json(serviceRes);
    }).catch(err => res.send(err));
};


exports.get_category_details = function(req, res) {
    fetch('https://api.chucknorris.io/jokes/random?category='+req.params.categoryId)
    .then(serviceRes => serviceRes.json())
    .then((serviceRes) =>{
        // console.log(serviceRes);
        res.json(serviceRes);
    }).catch(err => res.send(err));
};


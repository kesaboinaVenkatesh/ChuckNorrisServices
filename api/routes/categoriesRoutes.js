'use strict';
module.exports = function(app) {
  var categoryList = require('../controllers/categoriesController');

  // Routes
  app.route('/api/categories')
    .get(categoryList.get_category_list);


  app.route('/api/categories/:categoryId')
    .get(categoryList.get_category_details);
};

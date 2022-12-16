const express =  require('express');
const CategoriesService =  require('./../services/category.Service');


const router =  express.Router();
const serviceCategorie =  new CategoriesService();


router.get('/', (req, res) => {
  const categories =  serviceCategorie.find();
  res.json(categories);
});

module.exports = router;

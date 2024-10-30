var express = require('express');
var router = express.Router();

const treeShopController = require('../controllers/treeShopController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/treeShop',async function(req, res, next) {
  await treeShopController.getTreeShop(req, res);
});
router.post('/treeShop', async function(req, res, next) {
  await treeShopController.createTree(req, res);
});
router.delete('/treeShop', async function(req, res, next) {
  await treeShopController.reset();
});

module.exports = router;

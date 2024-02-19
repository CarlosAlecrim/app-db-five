const express = require('express')
const router = express.Router();

const produitController = require('../controllers/produitController')


router.get('/produits', produitController.listProduits)

module.exports = router;
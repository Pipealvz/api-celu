const Router = require("express");
const router = Router();
//const connect = require("../database/connection");
//const bcryptjs = require('bcryptjs');
const sequelize = require("../database/connection");

const producto = require('./producto.controller');

router.get('/', producto.getProductos);
router.post('/new', producto.crearProducto);
router.delete('/delete/:id', producto.deleteProductos);

module.exports = router;

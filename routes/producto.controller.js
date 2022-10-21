const Producto = require('../database/Product');
const productoController = {};
// Operadores de bd como OR, AND, etc...
const { Op } = require("sequelize");

/**
 * DOCUMENTACIÓN: 
 * Querys básicas: https://sequelize.org/master/manual/model-querying-basics.html
 */

productoController.crearProducto = async (req, res) => {
  const newProduct = Producto.build(
    {
      nombre_producto: req.body.nombre_producto,
      tipo_producto: req.body.tipo_producto,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      producto_destacado: req.body.producto_destacado
    }
  );
  await newProduct.save();
  console.log('Producto creado con éxito!');
  res.json({ status: 200 });
  console.log(newProduct);
  res.send(newProduct)

}

productoController.getProductos = async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
}

productoController.getProductosId = async (req, res) => {
  const productos = await Producto.findOne();
  res.json(productos);
}

productoController.deleteProductos = async (req, res) => {

  const eliminar = Producto.build({
    id: req.params.id
  })
  await eliminar.destroy()
  console.log('Producto eliminado con éxito!');
  res.status(200).json(eliminar);
}

module.exports = productoController;
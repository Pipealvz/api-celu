const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

// Definimos una clase ES6 de javascript
class Producto extends Model {
  // Creamos un método de clase
  getProductoCompleto() {
    return [this.nombre_producto].join(' ');
  }
}

// Configuración para el modelo de sequelize
const opciones = {
  sequelize: sequelize, //CONEXIÓN BD
  tableName: 'Producto', // TABLA BD
  timestamps: false // Creación de reporte y/o actualización: false
};

// Creamos nuestra 'Entidad' en express
Producto.init({
  id_producto: { type: DataTypes.BIGINT, primaryKey: true },
  nombre_producto: { type: DataTypes.STRING },
  tipo_producto: { type: DataTypes.STRING },
  cantidad: { type: DataTypes.INTEGER },
  precio: { type: DataTypes.INTEGER },
  descripcion: { type: DataTypes.STRING },
  producto_destacado: {  type: DataTypes.INTEGER  }
}, opciones);

// Exportamos Usuarios para poder usarlo en otros archivos javascript
module.exports = Producto;

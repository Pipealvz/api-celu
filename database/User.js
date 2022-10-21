const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

// Definimos una clase ES6 de javascript
class Usuario extends Model { 
    // Creamos un método de clase
    getNombreCompleto() {
        return [this.nombre].join(' ');
    }
}

// Configuración para el modelo de sequelize
const opciones = { 
    sequelize: sequelize, //CONEXIÓN BD
    tableName: 'Usuario', // TABLA BD
    timestamps : false // Creación de reporte y/o actualización: false
};

// Creamos nuestra 'Entidad' en express
Usuario.init({
    id: { type: DataTypes.BIGINT, primaryKey: true},
    nombre: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    contraseña: { type: DataTypes.STRING },
    rol_usuario: {type: DataTypes.STRING}
}, opciones);

// Exportamos Usuarios para poder usarlo en otros archivos javascript
module.exports = Usuario;

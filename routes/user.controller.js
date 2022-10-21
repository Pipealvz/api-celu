const Usuario = require('../database/User');
const usuarioController = {};
// Operadores de bd como OR, AND, etc...
const { Op } = require("sequelize");
const cnn_SQL = require('../database/connection');


/**
 * DOCUMENTACIÓN: 
 * Querys básicas: https://sequelize.org/master/manual/model-querying-basics.html
 */

usuarioController.crearUsuario = async (req, res) => {
    const newUser = Usuario.build(
        {
            nombreRegistro: req.body.nombreRegistro,
            correoRegistro: req.body.correoRegistro,
            contraseñaRegistro: req.body.contraseñaRegistro,
            rol_usuario: 'admin'
        }
    );
    await newUser.save();
    console.log('Usuario creado con éxito!');
    res.json({ status: 200 });
  console.log(newUser);
}

// Traemos todos los datos de usuarios de la bd
usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

usuarioController.allUsuarios = async (req, res) => {
  const prueba = 
  await cnn_SQL.query(`SELECT * FROM Usuario`);
  res.json(prueba);
}

usuarioController.loginSencillo = async (req, res) => {
    const condicion = {
        where: {
            [Op.and]: [
                { correo: req.body.correo },
                { contraseña: req.body.contraseña }
            ]
        }
    }
    const usuario = await Usuario.findAll(condicion);
    // SELECT * FROM Usuario WHERE correo = 'x' AND clave = 'Y';
    res.json(usuario);
}

usuarioController.deleteUser = async (req, res) => {

    const eliminar = Usuario.build({
        id: req.params.id
    })
    await eliminar.destroy()
    console.log('Usuario eliminado con éxito!');
    res.status(200).json(eliminar);
}

module.exports = usuarioController;
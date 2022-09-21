const Usuario = require('../database/User');
const usuarioController = {};
// Operadores de bd como OR, AND, etc...
const { Op } = require("sequelize");

/**
 * DOCUMENTACIÓN: 
 * Querys básicas: https://sequelize.org/master/manual/model-querying-basics.html
 */

usuarioController.crearUsuario = async (req, res) => {
    const newUser = Usuario.build(
        {
            nombre: req.body.nombre,
            correo: req.body.correo,
            contraseña: req.body.contraseña
        }
    );
    await newUser.save();
    console.log('Usuario creado con éxito!');
    res.json({ status: 200 });
}

// Traemos todos los datos de usuarios de la bd
usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
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
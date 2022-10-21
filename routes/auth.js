const Router = require('express');
const router = Router();

const cnn_SQL = require('../database/connection');
const { json } = require('express');
// TODO
// const jwt, const bcryptjs, validaciones joi

// Ingresar

router.get("/prueba", async (req, res, err) => {

  const prueba = 
  await cnn_SQL.query(`SELECT * FROM Usuario`);

  if(res) {
        return  res.json(prueba);

   }else if (err) {
        return res.status(400).json({ message: "Información Incorrecta" });
      } 
});


router.post('/login', async (req, res, err) => {
  // TODO Validación con Joi

  // Variables body (front)
  const { correoL, contraseñaL } = req.body;

  // Correo existe?
  const loginConsul = cnn_SQL.query(
    `SELECT * FROM Usuario WHERE correo='${correoL}' AND contraseña= '${contraseñaL} ';`);

    if(res) {
        return  res.json(loginConsul);

   }else if (err) {
        return res.status(400).json({ message: "Información Incorrecta" });
      } 
  
    res.json(loginConsul);
});

router.post('/Register', async (req, res) => {
    const newUser = Usuario.build(
        {
            nombre: req.body.nombre,
            correo: req.body.correo,
            contraseña: req.body.contraseña,
            rol_usuario: 'admin'
        }
    );
    await newUser.save();
    console.log('Usuario creado con éxito!');
    res.json({ status: 200 });
  console.log(newUser);
});

module.exports = router;

// Registrarse
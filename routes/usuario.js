const Router = require("express");
const router = Router();
//const connect = require("../database/connection");
const bcryptjs = require('bcryptjs');
const sequelize = require("../database/connection");

/*router.get("/", (req, res) => {
  try {
    sequelize.query("SELECT * FROM `Usuario`;", (err, row, fields) => {
      if (err) {
        console.log(err);
      }
      if (!row) {
        res.json({ message: "Lista de usuarios vacía" }); 
      }
      res.json(row);
      console.log("Usuaios encontrados");
    });
  } catch (error) {
    res.status(503).json({
      
      
      type: "FAILED",
      message: "Fail to connect database",
    });
    console.log(error, "Error en el servidor");
  }
});

router.post("/login", (req, res) => {
  const user = req.params.correo;
  const pass = req.params.contraseña;
  let data = [
    user,
    pass
  ]
  let query = "SELECT * FROM `Usuario` WHERE correo = ? "
  try {
    if (user && pass) {
      sequelize.query(query, data, async (err, results) => {
        if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
          console.log("Usuario no encontrado");
          res.send("Error").json(err);
        } else {
          console.log("Usuario logeado");
          res.send().json(user);
          console.log(user);
        }
      })
    } else {
      res.send("No se ingresaron usuarios");
      console.log(user);
      console.log(pass);
    }
  } catch (error) {
    console.log(error);
  }
})

router.get(`/:id`, (req, res) => {
  try {
    const { id } = req.params;
    sequelize.query(
      "SELECT * FROM `Usuario` WHERE id =? ",
      [id],
      (err, rows, fields) => {
        if (!err) {
          if (!rows[0]) {
            res.json({ message: "Este usuario no existe" });
            console.log("Usuario no encontrado");
          } else {
            res.json(rows[0]);
            console.log("Usuario encontrado");
          }
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    res.status(503).json({
      status: "504",
      type: "FAILED",
      message: "Fail to connect database",
    });
    console.log(error, "Error en el servidor");
  }
});

router.post("/new", (req, res) => {
  try {
    const {
      correo, contraseña, nombre
    } = req.body;
    let dataUser = [
      correo, contraseña, nombre
    ];
    let insertUser = `INSERT INTO Usuario(correo, contraseña, nombre) VALUES (?,?,?)`;
    sequelize.query(insertUser, dataUser, (errs, results, fields) => {
      if (errs) return console.error(errs.message);
    });
    res.json({ status: "200", type: "OK", message: "Usuario creado" });
    console.log("Usuario creado");
  } catch (error) {
    res.status(503).json({
      status: "504",
      type: "FAILED",
      message: "Fail to connect database",
    });
    console.log(error, "Error en el servidor");
  }
});

router.put("/edit/:id", (req, res) => {
  try {
    const {
      correo, contraseña, nombre
    } = req.body;
    const { id } = req.params;
    let dataUser = [
      correo, contraseña, nombre
    ];
    sequelize.query(
      `UPDATE usuario SET nombre =?, correo =?, contraseña =? WHERE id =?`,
      dataUser,
      (errs, rows, fields) => {
        if (errs) {
          return console.error(errs);
        }
        res.json({ status: "200", type: "OK", message: "Datos actualizados" });
        console.log("Usuario actualizado");
      }
    );
  } catch (error) {
    res.status(503).json({
      status: "504",
      type: "FAILED",
      message: "Fail to connect database",
    });
    console.log(error, "Error en el servidor");
  }
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  try {
    sequelize.query(
      `DELETE FROM usuarios WHERE IDENTIFICACION_USUARIO =?`,
      [id],
      (errs, rows, fields) => {
        if (errs) {
          console.log(errs);
        }
        res.json({
          status: "200",
          type: "OK",
          message: "usuario eliminado",
          user: id,
        });
      }
    );
  } catch (error) {
    res.status(503).json({
      status: "504",
      type: "FAILED",
      message: "Fail to connect database",
    });
    console.log(error, "Error en el servidor");
  }
});*/




const usuario = require('./user.controller');

router.get('/', usuario.getUsuarios);
router.get('/all', usuario.allUsuarios);
router.post('/new', usuario.crearUsuario);
router.post('/auth', usuario.loginSencillo);
router.delete('/delete/:id', usuario.deleteUser);

module.exports = router;

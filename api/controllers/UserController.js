/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /*
    Funcion que se encarga de iniciar sesion a un usuario.
  */
  login: async function (req,res) {

    //console.log(req.session.)

    var user = await User.findOne( {
      dni: req.param("dni"),
      password: req.param("password"),
    });

      if(!user){
          //Usuario o contrasena no valida
          res.redirect('/');
      }else{
          //Usuario valido
          req.session.authenticated = true;
          req.session.User = user;
          //res.send("Bienvenido " + req.session.User.name + " " + user.lastname);
          res.redirect('/equipment/list');
      }

  },


  /*
    Action para direccionar a la pagina de signup. Se utiliza por las policies.
  */
  signup_view: async function(req,res){
    res.view('pages/signup');
  },

  /*
    Funcion que se encarga de crear un usuario nuevo y verificar
    que este no exista en la base de datos previamente.
  */
  signup: async function(req,res){

    var dni = req.param('dni');
    var name = req.param('name');
    var lastname = req.param('lastname');
    var password = req.param('password');
    var permissions = req.param('permissions');

    var user = await User.findOne({dni:dni});
    if(!user){
      await User.create({dni:dni, name:name, lastname:lastname, password:password, permissions:permissions});
    }else {
      // Ya hay un usuario registrado con este DNI.
      res.send(500);
    }

    res.redirect('/');

  },


  //TODO: Make an action to reset password. Set password of an user to "1234".

};

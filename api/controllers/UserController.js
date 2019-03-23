/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req,res) {

    var user = await User.findOne( {
      dni: req.param("dni"),
      password: req.param("password"),
    });

      if(!user){
          //Usuario o contrasena no valida
          res.redirect('/');
      }else{
          //Usuario valido
          res.send("Bienvenido " + user.name + " " + user.lastname);
      }

  },

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
      res.send(500);
    }

    res.redirect('/');

  },

  //TODO: Make an action for reset password. Set password of an user to "1234".

};

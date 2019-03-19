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

      if(user === undefined){
          //Usuario o contrasena no valida
      }else{
          //Usuario valido
      }


      res.send("ANDÓ" + req.param("name"));

  }

};

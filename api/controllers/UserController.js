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
          return res.redirect('/signin');
      }else{
          //Usuario valido
          req.session.authenticated = true;
          req.session.User = user;
          //res.send("Bienvenido " + req.session.User.name + " " + user.lastname);
          return res.redirect('/');
      }

  },


  /*
    Action para direccionar a la pagina de signup. Se utiliza por las policies.
  */
  signup_view: async function(req,res){
    return res.view('pages/user/signup');
  },

  /*
    Funcion que se encarga de crear un usuario nuevo y verificar
    que este no exista en la base de datos previamente.
  */
  signup: async function(req,res){

    var dni = req.param('dni');
    var name = req.param('name');
    var lastname = req.param('lastname');
    var password = 1234;
    var permissions = req.param('permissions');

    var user = await User.findOne({dni:dni});
    if(!user){
      await User.create({dni:dni, name:name, lastname:lastname, password:password, permissions:permissions});
    }else {
      // Ya hay un usuario registrado con este DNI.
      return res.send(500);
    }

    return res.redirect('/');

  },

  signout: async function(req,res){
    if(!req.session.User){
      return res.redirect('/');
    }else{
      req.session.User = undefined;
      return res.redirect('/');
    }
  },

  reset_pass_admin_view: async function(req,res){
    return res.view('pages/user/reset_pass_admin')
  },

  reset_pass_admin: async function(req,res){
    var dni = req.param('dni');
    var dni2 = req.param('dni2');
    var password = 1234;

    if(dni != dni2){
      // TODO: los DNI no son iguales;
      return res.redirect('/signup')
    }else{
      var user = await User.updateOne({dni:dni}).set({password:password});

      if(!user){
        // TODO: No existe usuario con ese dni.
        return res.redirect('/signup')
      }else{
        // TODO: Exito
        return res.redirect('/');
      }
    }
  },
  reset_pass_user_view: async function(req,res){
    return res.view('pages/user/reset_pass_user')
  },

  reset_pass_user: async function(req,res){
    var passActual = req.param('passActual');
    var passNueva = req.param('passNueva');
    var passNueva2 = req.param('passNueva2');

    if(req.session.User){
      var passReal = req.session.User.password;
      var dni = req.session.User.dni;

      if(passReal === passActual){
        if(passNueva === passNueva2){
          var user = await User.updateOne({dni:dni}).set({password:passNueva});
          return res.redirect('/');
        }else{
          // Las contrasena nuevas no coinciden
          return res.redirect('/');
        }
      }else {
        // TODO: contrasena vieja mal ingresada
        return res.redirect('/');
      }
    }else{
      // TODO: No hay nadie iniciado sesion.
      return res.redirect('/');
    }

    if(dni != dni2){
      // TODO: los DNI no son iguales;
      return res.redirect('/signup')
    }else{
      var user = await User.updateOne({dni:dni}).set({password:password});

      if(!user){
        // TODO: No existe usuario con ese dni.
        return res.redirect('/signup')
      }else{
        // TODO: Exito
        return res.redirect('/');
      }
    }
  },

};

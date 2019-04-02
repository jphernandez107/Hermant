module.exports = {

list_view: async function(req,res){

  var session = req.session;
  var parts = await SpareParts.find({});

  if(!parts){
    // No se encontraron equipos registrados.
    return res.redirect('/');
  }else{
    return res.view('pages/parts/SpareParts', {parts, session});
  }
},

new_part: async function(req,res){
  return res.view('pages/parts/new_part');
},
/*
  Creamos un nuevo repuesto en la base de datos del sistema.
*/
create: async function(req,res){
    var type = String(req.param('tipo'));
    var brand = String(req.param('marca'));
    var model = String(req.param('modelo'));
    var internalCode = String(req.param('codigo interno'));
    var externalCode = String(req.param('codigo externo'));
    var stock = Num(req.param('cantidad'));
    var application = String(req.param('aplicacion'));



  var part = await SpareParts.create({type, brand, model, internalCode, externalCode, stock, application});

  return res.redirect('/parts');
},




};

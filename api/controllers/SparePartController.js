module.exports = {

list_view: async function(req,res){

  var session = req.session;
  var parts = await SparePart.find({});

  if(!parts){
    // No se encontraron equipos registrados.
    return res.redirect('/');
  }else{
    return res.view('pages/parts/parts_list', {parts, session});
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
    var detailLink = String(req.param('detailLink'));
    var stock = Number(req.param('cantidad'));
    var application = String(req.param('aplicacion'));
    var unitPrice = Number(req.param('unitPrice'));

    if(unitPrice < 0){
      unitPrice = 0;
    }

    var part = await SparePart.create({type, brand, model, internalCode, detailLink, stock, application, pricePerUnit:unitPrice});

  return res.redirect('/parts/list');
},
/*
  Eliminamos un equipo
*/
delete: async function(req,res){
  var idPart = req.param('idPart');

  await SparePart.destroy({id:idPart});

  return res.redirect('/parts/list');
},



};

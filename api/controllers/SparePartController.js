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
  Eliminamos un repuesto
*/
delete: async function(req,res){
  var idPart = req.param('idPart');

  await SparePart.destroy({id:idPart});

  return res.redirect('/parts/list');
},

/*
    Editamos el repuesto
  */
 edit: async function(req,res){
  var idPart = req.param('idPart');
  var part = await SparePart.findOne({id:idPart});
  return res.view('pages/parts/new_part', {editPart:part});
},

edited: async function(req,res){
  var idPart = req.param('idPart');

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

  await SparePart.update({id:idPart}).set({
    type, brand, model, internalCode, detailLink, 
    stock, application, pricePerUnit:unitPrice
  });

  return res.redirect('/parts/list');
},

add_stock: async function(req,res){
  var idPart = req.param('idPart');
  var stockToAdd = Number(req.param('cantidad'));
  var newStock = 0;

  var part = await SparePart.findOne({id:idPart});
  
  if(part != undefined){
    newStock = part.stock + stockToAdd
    await SparePart.update({id:idPart}).set({ stock:newStock });
  }

  return res.redirect('/parts/list');
},



};

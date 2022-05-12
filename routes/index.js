var express = require('express');
var router = express.Router();

var printer = require('@thiagoelg/node-printer')

/*  Package super interessant. Il permet de lister les imprimantes connectées, et de déclencher automatiquemenent une impression.
Je n'arrive malheureusement pas à mettre en forme le ticket de caisse ni même à activer la fonction de 'coupe automatique de 
l'imprimante POS qui serait suivie par une marge nécessaire pour le ticket suivant... */

router.post('/toprint', async function (req, res, next) {
  console.log('the print should be launch')
  var printers = printer.getPrinters(); //commande qui permet de lister toute mes imprimantes.
  /* var template = "N\nS4\nD15\nq400\nR\nB20,10,0,1,2,30,173,B,\"barcode\"\nP0\n"; //Tentative de mise en forme
  printer.printDirect({
    data: template.replace(/barcode/, barcode_text), //Commande pour imprimer 
    printer: 'XP-80', // printer name, if missing then will print to default printer
    type: 'RAW',
    success: function (jobID) {
      console.log("sent to printer with ID: " + jobID);
    },
    error: function (err) {
      console.log(err);
    }
  }) */
  var result = true
  res.json({ result })
})
module.exports = router;

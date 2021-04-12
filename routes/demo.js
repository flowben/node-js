var express = require('express');
var router = express.Router();

//Comportement en fonction de la méthode :
//GET : Lecture après récupération
//POST : Création, sauvegarde de la donnée
//PUT : Mise à jour, édition, sauvegarde
//DELETE : Supression de la donnée

//API REST

router.get('/', function(req, res, next) {
  const model = {
    id : 2,
    title : "Parcours X"
  };
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(model);
});

// router.post('/', function(req, res, next) {
//   res.send('Créer une facture');
// })
// router.put('/', function(req, res, next) {
//   res.send('Mettre à jour une facture');
// });
// router.delete('/:id', function(req, res, next) {
//   res.send('Supprimer une facture');
// });

module.exports = router;


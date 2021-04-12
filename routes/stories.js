var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  const story1 = {
    title : "Parcours 1 : Le Vieux-Lyon",
    image : "",
    description : 'Découvrez le Vieux-Lyon avec ses traboules et leurs secrets! Vous déambulerez dans ce quartier préservé depuis le XVIe sciècle à travers ses façades, ses gargouilles, ses passages et ses rues pavées',
    level : 'Facile',
    time : '56 min',
    distance : '2km',
  };
  const story2 = {
    title : "Parcours 2 : La Croix-Rousse",
    image : "",
    description : "Découvrez la Croix-Rousse avec ses pentes semées de traboules et d’escaliers les périodes gallo-romaines! Vous décrouvirez l'histoire des canuts par son dédale de rues, de passage et de places accrochées à la colline.",
    level : 'Moyen',
    time : '78 min',
    distance : '5 km',
  };
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.params.id);
  if (1 === req.params.id ){
    res.json(story1);
  } else if (2 === req.params.id){
    res.json(story2);
  } else {
    res.statusCode = 404;
    res.json({erreur: "Cette page n'existe pas"})
  }  
  
});


module.exports = router;


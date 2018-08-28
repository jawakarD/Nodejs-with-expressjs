const express = require('express');


var router = express.Router();

router.get('/',(req,res)=>{
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

    res.render('index',{
      pageTitle : "Home",
      pageId : "home",
      artwork: pagePhotos,
      speakers : pageSpeakers
    });
})


module.exports = router;

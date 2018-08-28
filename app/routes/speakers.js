const express = require('express');

var router = express.Router();


router.get('/speakers',(req,res)=>{
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function(item) {
      pagePhotos = pagePhotos.concat(item.artwork);
    });

      res.render('speakers',{
        pageTitle : "Speakers",
        pageId : "speakerList",
        speakers : pageSpeakers,
        artwork: pagePhotos
      });
  })



router.get('/speakers/:speakerid',(req,res)=>{
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers =[];

  data.speakers.forEach(function(item) {
    if(item.shortname == req.params.speakerid){
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
  }
  });

    res.render('speakers',{
      pageTitle : "Speaker Info",
      pageId : "speakerDetail",
      speakers : pageSpeakers,
      artwork: pagePhotos
    });
});

module.exports = router;

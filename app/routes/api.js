const express = require('express');


var router = express.Router();
const feedbackData = require('../data/feedback.json');
const bodyParse = require('body-parser');
const fs = require('fs');

router.get('/api',(req,res)=>{
  res.json(feedbackData);
})

router.use(bodyParse.json());
router.use(bodyParse.urlencoded({extended : false}));

router.post('/api',(req,res)=>{
  feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData),'utf-8',function(err) {
    if(err){
      console.log(err);
    }
  })
  res.json(feedbackData);
})

router.delete('/api/:id',(req,res)=>{
  feedbackData.splice(req.params.id,1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData),'utf-8',function(err) {
    if(err){
      console.log(err);
    }
  })
  res.json(feedbackData);
})




module.exports = router;

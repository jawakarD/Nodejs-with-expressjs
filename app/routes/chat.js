const express = require('express');


var router = express.Router();

router.get('/chat',(req,res)=>{

    res.render('chat',{
      pageTitle : "Chat",
      pageId : "chat",
    });
})


module.exports = router;

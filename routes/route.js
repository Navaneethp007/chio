const express = require('express');
const router = express.Router();

router.get('/details', (req, res, next)=>{
  res.send('hloo');

});
module.exports = router;

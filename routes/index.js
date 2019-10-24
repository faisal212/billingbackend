var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
/* GET home page. */
router.get('/',async function(req, res, next) {

 try {
 const result = await fetch('https://portal.onairtel.com/xmlapi/xmlapi', {
    method: 'POST',
    headers:  {  'Content-Type': 'text/xml'    } ,
    body: '<?xml version="1.0"?> <methodCall> <methodName>listCustomers</methodName><params><param><value><struct> <member> </member> </struct></value></param> </params> </methodCall>' 
  });
  console.log(result)

  res.send({
    result:result
  });
 } catch (error) {
   console.log(error);
   res.status(400).send(error);
 }
 
});

module.exports = router;

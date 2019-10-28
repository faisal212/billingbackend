var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const xml2js = require('xml2js-es6-promise');
/* GET home page. */
router.get('/', async function (req, res, next) {

  try {
    const xml = '<?xml version="1.0"?> <methodCall> <methodName>listCustomers</methodName><params><param><value><struct> <member> </member> </struct></value></param> </params> </methodCall>';
    const xmlResult = await axios.post("https://portal.onairtel.com/xmlapi/xmlapi",xml,{headers: { 'content-type': 'application/x-www-form-urlencoded' },});
    const result = await xml2js(xmlResult.data);
    
    console.log(JSON.stringify(result));
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

});

module.exports = router;



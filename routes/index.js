var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp' });
});

router.get('/:time', function(request, response){
  let data = request.params.time
  console.log(isNaN(data))
  let unixdate
  let naturaldate
  let dateoption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  if (!isNaN(data)){
    unixdate = data
    naturaldate = new Date(unixdate * 1000)
    naturaldate = naturaldate.toLocaleDateString('en-US', dateoption)
    response.json({unix: unixdate, natural: naturaldate})
  } else {
    naturaldate = new Date(data)
    naturaldate = naturaldate.toLocaleDateString('en-US', dateoption)
    unixdate = new Date(data).getTime() / 1000
    console.log(unixdate !== null)
    if(!isNaN(unixdate) ){
      response.json({unix: unixdate, natural: naturaldate})
    } else {
      response.json({unix: 'null', natural: 'null'})
    }
  }

})

module.exports = router;

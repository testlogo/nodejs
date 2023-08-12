var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 文件上传 */
router.get('/portrait', (req, res) => {
  res.render('portrait');
})
/* 文件处理 */
router.post('/portrait',(req, res) => {
  const form = formidable(
    { 
      multiples: true,
      uploadDir: __dirname + '/../public/images',
      keepExtensions: true
    });
  form.parse(req, (err, fields, files) =>{
    if(err){
      next(err);
      return;
    }
    console.log(fields);
    console.log(files);

    res.send('OK');
  })
})
module.exports = router;

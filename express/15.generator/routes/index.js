var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** 文件上传处理 */
router.post('/file', function(req, res, next) {
  const form = formidable({
    multipart: true,
    uploadDir: __dirname + '/../public/images',  // 文件存储目录
    keepExtensions: true   // 保持后缀
  });

  form.parse(req, (err,fields, files) => {
    if (err) {
      next(err);
      return;
    }

    let url = '/images/' + files.portrait.newFilename; // 保存至数据库

    res.join({ fields, files });
  })
})

module.exports = router;

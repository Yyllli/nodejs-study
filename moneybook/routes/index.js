var express = require('express');
var router = express.Router();

/* 记帐本列表 */
router.get('/account', function(req, res, next) {
  res.render('list', {});
});

/* 添加记录 */
router.get('/account/create', function(req, res, next) {
  res.render('detail')
});

/** 新增一条 */
router.post('/account', function(req, res, next) {
  console.log(req.body);
  res.send('添加');
})

module.exports = router;

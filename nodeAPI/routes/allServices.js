const express = require('express'),
  router = express.Router();
  
// get services lists
router.get('/categoryList', function(req, res) {
  let sql = `SELECT * FROM category`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// get services sub category lists
router.get('/subCategoryList', function(req, res) {
  let sql = `SELECT * FROM subCategory`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Sub Category lists retrieved successfully"
    })
  })
});


// get Unit lists
router.get('/unitList', function(req, res) {
  let sql = `SELECT * FROM serviceUnit`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Unit lists retrieved successfully"
    })
  })
});

// get Area lists
router.get('/areaList', function(req, res) {
  let sql = `SELECT * FROM area`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Area lists retrieved successfully"
    })
  })
}); 

// Time for execution 
router.get('/timeList', function(req, res) {
  let sql = `SELECT * FROM timeforexecution`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Time lists retrieved successfully"
    })
  })
}); 

// create new user

router.post('/new', function(req, res) {
  let sql = `INSERT INTO users(u_id, u_name, mobile, u_email, u_password) VALUES (?)`;
  let values = [
    req.body.u_name,
	req.body.mobile,
	req.body.u_email,
	req.body.u_password
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
}); 

module.exports = router;
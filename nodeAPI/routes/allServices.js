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
    res.json(data)
  })
});


// get Unit lists
router.get('/unitList', function(req, res) {
  let sql = `SELECT * FROM serviceUnit`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// get Area lists
router.get('/areaList', function(req, res) {
  let sql = `SELECT * FROM area`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
     res.json(data)
  })
});

// Time for execution
router.get('/timeList', function(req, res) {
  let sql = `SELECT * FROM timeforexecution`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// create new user
router.post('/new', function(req, res) {
  let sql = `INSERT INTO users(u_name, mobile, u_email, u_password) VALUES (?)`;
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

// create new service Provider
router.post('/serviceProvider', function(req, res) {
  // let sql = `INSERT INTO serviceprovider(profile_image, mobile, name, name_arabic, email, password, type, company_file, cid, aid) VALUES (?)`;
  let sql = `INSERT INTO serviceprovider(profile_imge, mobile, name, name_arabic, email, password, type, company_file, cid, aid) VALUES (?)`;
  let values = [
    req.body.profile_image,
	req.body.mobile,
	req.body.name,
	req.body.name_arabic,
	req.body.email,
	req.body.password,
	req.body.type,
	req.body.company_file,
	req.body.cid,
	req.body.aid
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New service provide created successfully"
    })
  })
});

// Service provider List
router.get('/providerList', function(req, res) {
  let sql = `SELECT * FROM serviceprovider`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// create Order
router.post('/createOrder', function(req, res) {
  // let sql = `INSERT INTO create_order(location, unid, cid, subid, no_of_workers, nationality, worker_gender, materials, days_required, tfeID, request_description, problem_photo, promo_code ) VALUES (?)`;
  let sql = `INSERT INTO create_order(unid, cid, subid, no_of_workers, nationality, worker_gender, materials, days_required, tfeID, request_description, problem_photo, promo_code ) VALUES (?)`;
  let values = [
    // req.body.location,
	req.body.unid,
	req.body.cid,
	req.body.subid,
	req.body.no_of_workers,
	req.body.nationality,
	req.body.worker_gender,
	req.body.materials,
	req.body.days_required,
	req.body.tfeID,
	req.body.request_description,
	req.body.problem_photo,
	req.body.promo_code

  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New order created successfully"
    })
  })
});


// Service provider List
router.get('/orderList', function(req, res) {
  let sql = `SELECT *
FROM ((create_order
INNER JOIN area ON create_order.aid = area.aid)
INNER JOIN serviceunit ON create_order.unid = serviceunit.unid
INNER JOIN category ON create_order.cid = category.cid
INNER JOIN subcategory ON create_order.subid = subcategory.subid)`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});
module.exports = router;

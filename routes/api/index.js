const router = require('express').Router();
      user = require('./user');

router.use("/user", user);

module.exports = router;
const path = require("path"),
      router = require("express").Router();
      apiRoutes = require("./api");


// API routes
router.use("/api", apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;

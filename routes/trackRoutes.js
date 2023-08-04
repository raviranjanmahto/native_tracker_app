const express = require("express");
const router = express.Router();
const verifyMiddleware = require("../middlewares/verifyMiddleware");
const trackController = require("../controllers/trackController");

router.use(verifyMiddleware.verifyToken);

router.get("/tracks", trackController.getTrack);
router.post("/tracks", trackController.createTrack);

module.exports = router;

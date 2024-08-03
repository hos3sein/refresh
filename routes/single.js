const express = require("express");

const C = require("../controllers/singleRefresh");

const router = express.Router();

//Post
router.post("/singleCommerce", C.singleOrder);

router.post("/singleTransport", C.singleTransport);

router.get("/singlecommercet/:id", C.singleTransportC);

router.get("/singlecommercettr/:id", C.singleTrucktC);

router.post("/chatt", C.chatUpdate);

router.post("/inq", C.singleTransportInquery);

router.post("/linemaker", C.singlelinemaker);


// router.post("/singleTruck", C.refreshtruck);
// router.post("/singleLineMaler",C,)
//Get






module.exports = router;

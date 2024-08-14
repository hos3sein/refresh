const express = require("express");

const C = require("../controllers/refresh");

const router = express.Router();

//Post
router.post("/callsetting", C.refreshSetting);
router.post("/callcontent", C.refreshContent);
router.post("/calltruck", C.refreshtruck);
//Get
router.get("/calltransport", C.refreshTransport);
router.get("/callcommerce", C.refreshCommerce);
router.get("/qrrefresher",C.refreshLineMakerQr)



router.get("/callcommercebid", C.refreshCommerceBid);
router.get("/calllinemaker", C.refreshLineMaker);
router.get("/callalone/:id/:type", C.refreshAlone);
router.get("/callfavorite",C.refreshFavorite);
router.get("/callapprove",C.refreshApprove);
router.get("/refreshnotif",C.refreshNotif);


//! its for test single
router.get("/singlecommerce/:id",C.singleCommerce)
router.get("/singletransport/:id",C.singleCommerce)
router.get("/singletruck/:id",C.singleCommerce)
router.get("/singlelinemaker/:id",C.singleCommerce)



module.exports = router;

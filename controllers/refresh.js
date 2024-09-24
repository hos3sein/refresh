const asyncHandler = require("../middleware/async");

exports.refreshSetting = asyncHandler(async (req, res, next) => {
  io.emit("globalSetting", {
    data: {
      success: true,
    },
  });
//   io.emit("globalSetting", {
//     data: {
//       success: true,
//     },
//   });
  console.log("refresh shod globalSetting");
  res.status(200).json({
    success: true,
    data: {},
  });
});


exports.refreshContent = asyncHandler(async (req, res, next) => {
  
  io.emit("globalContent" , req.body );
//   io.emit("globalContent", req.body );
//   console.log("refresh shod globalContent", req.body);
  res.status(200).json({
    success: true,
    data: {},
  });
});


exports.refreshtruck = asyncHandler(async (req, res, next) => {
  io.emit("globalTruck", {
    data: {
      success: true,
    },
  });
//   io.emit("globalTruck", {
//     data: {
//       success: true,
//     },
//   });
  console.log("refresh shod globalTruck");
  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.refreshCommerce = asyncHandler(async (req, res, next) => {
  await io.emit("globalCommerce", {
    data: {
      success: true,
    },
  }); 
//   await io.emit("globalCommerce", {
//     data: {
//       success: true,
//     },
//   }); 
  console.log(
    "<<<<<<<<<<<<<<<<<<<<<<<<<refresh shod globalCommerce>>>>>>>>>>>>>>>>>>>>>"
  );
  res.status(200).json({
    success: true,
    data: {},
  });
});
exports.refreshCommerceBid = asyncHandler(async (req, res, next) => {
  
  await io.emit("handShakeCommerce", {
    data: {
      success: true,
    },
  }); 
//   await io.emit("handShakeCommerce", {
//     data: {
//       success: true,
//     },
//   }); 
  console.log(
    "<<<<<<<<<<<<<<<<<<<<<<<<<refresh shod globalCommerce>>>>>>>>>>>>>>>>>>>>>"
  );
  res.status(200).json({
    success: true,
    data: {},
  });
});




exports.refreshTransport = asyncHandler(async (req, res, next) => {
  await io.emit("globalTransport", {
    data: {
      success: true,
    },
  });
//   await io.emit("globalTransport", {
//     data: {
//       success: true,
//     },
//   });
  console.log(
    "<<<<<<<<<<<<<<<<<refresh shod globalTransport>>>>>>>>>>>>>>>>>>>>>>>>>>"
  );
  res.status(200).json({
    success: true,
    data: {},
  });
});


exports.refreshLineMaker = asyncHandler(async (req, res, next) => {
  io.emit("globalLineMaker", {
    data: {
      success: true,
    },
  });
//   io.emit("globalLineMaker", {
//     data: {
//       success: true,
//     },
//   });
  console.log("<<<<<<<<<<<<<<<<<refresh shod globalLineMaker>>>>>>>>>>>>>>>>>");
  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.refreshAlone = asyncHandler(async (req, res, next) => {
  await io.to(req.params.id.toString()).emit(req.params.type, {
    data: {
      success: true,
    },
  });
  console.log(`type>>>>>>>>`, req.params.type);
  res.status(200).json({
    success: true,
    data: {},
  });
});
exports.refreshFavorite= asyncHandler(async (req, res, next) => {
  io.emit("favorite", {
    data: {
      success: true,
    },
  });
//   io.emit("favorite", {
//     data: {
//       success: true,
//     },
//   });
  console.log("<<<<<<<<<<<<<<<<<refresh shod globalfavorite>>>>>>>>>>>>>>>>>");
  res.status(200).json({
    success: true,
    data: {},
  });
});
exports.refreshApprove= asyncHandler(async (req, res, next) => {
  io.emit("approve", {
    data: {
      success: true,
    },
  });
//   io.emit("approve", {
//     data: {
//       success: true,
//     },
//   });
  console.log("<<<<<<<<<<<<<<<<<refresh shod globalApprove>>>>>>>>>>>>>>>>>");
  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.refreshNotif = asyncHandler(async (req, res, next) => {
  
  io.emit("globalNotif", {
    data: {
      success: true,
    },
  });
//   io.emit("globalNotif", {
//     data: {
//       success: true,
//     },
//   });
  res.status(200).json({
    success: true,
    data: {},
  });
});


exports.singleCommerce = asyncHandler(async (req, res, next) => {
  const userId=req.params.id
  io.emit(`commerce${userId}`, {
    data: {
      success: true,
    },
  });
//   io.emit(`commerce${userId}`, {
//     data: {
//       success: true,
//     },
//   });
  res.status(200).json({
    success: true,
    data: {},
  });
});
exports.singleTransport = asyncHandler(async (req, res, next) => {
  const userId=req.params.id
  io.emit(`transport${userId}`, {
    data: {
      success: true,
    },
  });
//   io.emit(`transport${userId}`, {
//     data: {
//       success: true,
//     },
//   });
  res.status(200).json({
    success: true,
    data: {},
  });
});
exports.singleTruck = asyncHandler(async (req, res, next) => {
  const userId=req.params.id
  io.emit(`truck${userId}`, {
    data: {
      success: true,
    },
  });
//   io.emit(`truck${userId}`, {
//     data: {
//       success: true,
//     },
//   });
  res.status(200).json({
    success: true,
    data: {},
  });
});
exports.singleLineMaker = asyncHandler(async (req, res, next) => {
  const userId=req.params.id
  io.emit(`linemaker${userId}`, {
    data: {
      success: true,
    },
  });
//   io.emit(`linemaker${userId}`, {
//     data: {
//       success: true,
//     },
//   });
  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.refreshLineMakerQr = asyncHandler(async (req, res, next) => {
  io.emit("qrrefresh", {
    data: {
      success: true,
    },
  });
//   io.emit("qrrefresh", {
//     data: {
//       success: true,
//     },
//   });
  console.log("truck qr generate");
  res.status(200).json({
    success: true,
    data: {},
  });
});
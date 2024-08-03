// exports.refresh = async (req, res, next) => {
//   let make = [];

//   // global product == globalProductsRefresh
//   let urlsGlobalProduct = [
//     "createproduct",
//     "createweb",
//     "deleteproductme",
//     "confirmrequest",
//     "declinerequest",
//     "xxxbbnn",
//   ];

//   // global product == globalFutureRefresh
//   let urlsGlobalFuture = ["xxxbbnn"];

//   // local product == refreshProduct
//   let urlsLocalProduct = [
//     "commentto",
//     "statuschange",
//     "requestto",
//     "cancelrequestdriver,",
//   ];

//   // global Line == globalLineRefresh
//   let urlsGlobalLine = ["bookingtime", "settime", "upbook"];

//   // global Driver == globalRefreshDriver
//   let urlsGlobalDriver = ["addload", "cancelrequestdriver"];

//   // Local Driver == refreshDriver
//   //!ino bayad rajebesh fekr va mashveray konm
//   let urlsLocalDriver = [
//     "confirmdriver",
//     "rejectdriver",
//     "requestdrivertoload",
//     "deleterequest",
//     "completeregister",
//     "khiyar",
//   ];

//   // local me  == refreshMe
//   let urlsLocalMe = ["picprofile", "pictureprofileweb", "rateproduct"];

//   // local me  == refreshWallet
//   let urlsLocalWallet = ["charge", "approvewithdrawal", "paymentto"];

//   // global post ==== globalRefresh
//   let urlsGlobal = [];

//   // global post ==== globalRefreshForum
//   let urlsGlobalPost = [
//     "editmepost",
//     "deletemepost",
//     "addcomment",
//     "likeordislike",
//     "deletecomment",
//     "approvepost",
//     "deletepost",
//     "createpost",
//   ];

//   // global shipping == == globalRefreshShipping
//   let urlsGlobalShipping = [
//     "priceinquiryforseller",
//     "priceinquiryforbuyer",
//     "cancelpriceannunciation",
//     "addinquiry",
//     "changefullfit",
//   ];

//   // todo ino locali konm
//   // global Notification == == globalRefreshNotification
//   let urlsGlobalNotification = ["seen"];

//   // ============================
//   // found global product
//   const foundGlobalRefresh = urlsGlobalFuture.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found global Linemaker
//   const foundGlobalLine = urlsGlobalLine.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   const foundGlobalProduct = urlsGlobalProduct.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found local wallet
//   const foundLocalWallet = urlsLocalWallet.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found global Notification
//   const foundGlobalNotification = urlsGlobalNotification.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found global product
//   const foundGlobalShipping = urlsGlobalShipping.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found global Driver
//   const foundGlobalDriver = urlsGlobalDriver.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found Local Driver
//   const foundLocalDriver = urlsLocalDriver.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found local product
//   const foundLocalProduct = urlsLocalProduct.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   // found local me
//   const foundLocalMe = urlsLocalMe.find((v) => req.originalUrl.includes(v));

//   // found global
//   const foundGlobal = urlsGlobal.find((v) => req.originalUrl.includes(v));

//   // found global post
//   const foundGlobalPost = urlsGlobalPost.find((v) =>
//     req.originalUrl.includes(v)
//   );

//   const refType = foundLocalProduct
//     ? "refreshProduct"
//     : foundLocalMe
//     ? "refreshMe"
//     : foundLocalDriver
//     ? "refreshDriver"
//     : foundLocalWallet
//     ? "refreshWallet"
//     : null;

//   if (typeof foundGlobalProduct != "undefined") {
//     samIo.emit("globalProductsRefresh");
//   }

//   if (typeof foundGlobalLine != "undefined") {
//     samIo.emit("globalLineRefresh");
//     console.log("globalLineRefresh");
//   }

//   if (foundGlobalRefresh == "xxxbbnn") {
//     samIo.emit("globalFutureRefresh");
//   }

//   if (typeof foundGlobalNotification != "undefined") {
//     samIo.emit("globalRefreshNotification");
//   }

//   if (typeof foundGlobalShipping != "undefined") {
//     console.log("globalRefreshShipping");
//     samIo.emit("globalRefreshShipping");
//   }

//   if (foundLocalProduct == "commentto") {
//     const product = await Product.findById(req.body.productId);

//     await make.push(product?.seller, product?.buyer);
//   }

//   if (
//     foundLocalDriver == "confirmdriver" ||
//     foundLocalDriver == "rejectdriver"
//   ) {
//     const requestDriver = await RequestDriver.findById(req.params.id);

//     const request = await Request.findById(req.params.requestId);

//     await make.push(requestDriver.requester, request?.user);
//   }

//   if (foundLocalDriver == "completeregister") {
//     const user = await User.findById(req.user.id);

//     if (user.roleModel == "Driver") {
//       console.log("refrsh vase driver");
//       await make.push(req.user.id);
//     }
//   }

//   if (foundLocalDriver == "requestdrivertoload") {
//     const requestDriver = await RequestDriver.findById(req.params.id);

//     console.log("requestdrivertoload>>>");

//     await make.push(req.user.id, requestDriver?.requester);
//   }

//   if (foundLocalProduct == "requestto") {
//     const product = await Product.findById(req.params.id);

//     console.log("requestto refresh>>>");

//     await make.push(product?.seller, product?.buyer, req.user.id);

//     console.log("make>>>", make);
//   }

//   if (foundLocalProduct == "statuschange") {
//     const product = await Product.findById(req.params.id).populate({
//       path: "status",
//     });

//     await make.push(product?.seller, product?.buyer);

//     console.log("statuschange>>>", make);

//     if (
//       (product.status.confirmTransportForSeller &&
//         req.body.confirmTransportForBuyer &&
//         product.typeOfTransport == 1) ||
//       (req.body.confirmTransportForSeller &&
//         product.status.confirmTransportForBuyer &&
//         product.typeOfTransport == 1)
//     ) {
//       await samIo.emit("globalRefreshDriver");
//     }

//     if (
//       (product.status.confirmTransportForSeller &&
//         req.body.confirmTransportForBuyer &&
//         product.typeOfTransport == 2) ||
//       (req.body.confirmTransportForSeller &&
//         product.status.confirmTransportForBuyer &&
//         product.typeOfTransport == 2)
//     ) {
//       await samIo.emit("globalRefreshShipping");
//     }
//   }

//   if (
//     foundGlobalDriver == "addload" ||
//     foundGlobalDriver == "cancelrequestdriver"
//   ) {
//     await samIo.emit("globalRefreshDriver");
//   }

//   if (foundLocalDriver == "deleterequest") {
//     const requestMe = await Request.findById(req.params.id);

//     const requestDriver = await RequestDriver.findById(requestMe.requestDriver);

//     await make.push(requestDriver.requester, req.user.id);
//   }

//   if (foundLocalDriver == "khiyar") {
//     const transportation = await Transportation.findById(req.params.id);
//     const requestDriver = await RequestDriver.findById(
//       transportation.requestDriver
//     );

//     await make.push(requestDriver?.requester, req.user.id);
//   }

//   if (
//     foundLocalMe == "picprofile" ||
//     foundLocalMe == "pictureprofileweb" ||
//     foundLocalMe == "rateproduct" ||
//     foundLocalWallet == "charge"
//   ) {
//     await make.push(req.user._id);
//   }

//   if (typeof foundGlobal != "undefined") {
//     samIo.emit("globalRefresh");
//   }

//   if (typeof foundGlobalPost != "undefined") {
//     console.log(">>>>>>>>globalRefreshForum");

//     samIo.emit("globalRefreshForum");
//   }

//   if (foundLocalWallet == "paymentto") {
//     await make.push(req.user._id, req.params.userId);
//   }

//   if (foundLocalWallet == "approvewithdrawal") {
//     await make.push(req.params.userId);
//   }

//   if (make.length) {
//     await loadRefresh(make, refType);
//   }

//   next();
// };

// const loadRefresh = async (x, refreshType) => {
//   if (x) {
//     for (let i = 0; i < x.length; i++) {
//       if (typeof x[i] != "undefined") {
//         await samIo.to(x[i].toString()).emit(refreshType, {
//           data: {
//             success: true,
//           },
//         });
//       }
//     }
//   }
// };

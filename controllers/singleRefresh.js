const asyncHandler = require("../middleware/async");
exports.singleOrder = asyncHandler(async (req, res, next) => {
  const {order}=req.body 
  io.emit(`commerce${order.user._id}`,order);
  io.emit(`commerce${order.userTo._id}`,order);
  if(order.haveTransport){
       console.log(`transportc${order.userId}`);
      io.emit(`transportc${order.userId}`,order)
  }
  
    console.log("refresh shod globalSetting");
    res.status(200).json({
      success: true,
      data: {},
    });
  });

  exports.singleTransport = asyncHandler(async (req, res, next) => {
   
     const  userId=req.params.id
      
      res.status(200).json({
        success: true,
        data: {},
      });
    });
    
    
    exports.singleTransportC = asyncHandler(async (req, res, next) => {
   
      const  userId=req.params.id

      console.log(`commercet${userId}`);
      io.emit(`commercet${userId}`,{
        date:{
          success:true
        }
      })
    //   io.emit(`commercet${userId}`,{
    //     date:{
    //       success:true
    //     }
    //   })
       res.status(200).json({
         success: true,
         data: {},
       });
       
     });

     exports.chatUpdate=asyncHandler(async (req, res, next) => {
      const {requster,transport}=req.body

      console.log(req.body);

      io.emit(`chat${requster}`,{data:{
        success:true
      }})

      io.emit(`chat${transport}`,{data:{
        success:true
      }})
      io.emit(`chat${requster}`,{data:{
        success:true
      }})

      io.emit(`chat${transport}`,{data:{
        success:true
      }})

      res.status(200).json({
        success: true,
        data: {},
      });

     })

     exports.singleTransportInquery = asyncHandler(async (req, res, next) => {
   
      const {inq}=req.body

      
      console.log("fffffffff");

       console.log("iibb",inq.transport.userId);  

      const requster=inq.requester._id
      const responser=inq.responser._id
      const transport=inq.transport.userId

      io.emit(`inquery${requster}`,{data:{
        success:true
      }})
      
      io.emit(`inquery${responser}`,{data:{
        success:true
      }})

      
      io.emit(`inquery${transport}`,{data:{
        success:true
      }})
    //   io.emit(`inquery${requster}`,{data:{
    //     success:true
    //   }})
      
    //   io.emit(`inquery${responser}`,{data:{
    //     success:true
    //   }})

      
    //   io.emit(`inquery${transport}`,{data:{
    //     success:true
    //   }})
       res.status(200).json({
         success: true,
         data: {},
       });
       
     });

     exports.singleTrucktC = asyncHandler(async (req, res, next) => {
   
      const userId=req.params.id

      console.log(`commercetr${userId}`);
      io.emit(`commercetr${userId}`,{
        date:{
          success:true
        }
      })
    //   io.emit(`commercetr${userId}`,{
    //     date:{
    //       success:true
    //     }
    //   })
       res.status(200).json({
         success: true,
         data: {},
       });
     });
     
     exports.singlelinemaker= asyncHandler(async (req, res, next) => {
   
      const {lineMakerId,driverId}=req.body
          
      io.emit(`linesingel${lineMakerId}`,{nice:2})

      io.emit(`linesingel${driverId}`,{nice:2})
      
      io.emit(`linesingel${lineMakerId}`,{nice:2})

      io.emit(`linesingel${driverId}`,{nice:2})
    
       res.status(200).json({
         success: true,
         data: {},
       });
     });
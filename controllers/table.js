const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const fetch = require("node-fetch");
const Table = require("../models/Table");

exports.create = asyncHandler(async (req, res, next) => {
  const { user, type } = req.body;

  const createTable = await Table.create({
    user,
    type,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.all = asyncHandler(async (req, res, next) => {
  const all = await Table.find({ ok: false });

  res.status(200).json({
    success: true,
    data: all,
  });
});


exports.toOK = asyncHandler(async (req, res, next) => {
    const all = await Table.findOneAndUpdate({user:req},{ ok: false });
  
    res.status(200).json({
      success: true,
      data: all,
    });
  });
  
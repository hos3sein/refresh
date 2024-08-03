const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId },

    type: { type: String },

    ok: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", TableSchema);

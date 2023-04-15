const mongoose = require("mongoose");

module.exports = mongoose.model(
  "theater",
  new mongoose.Schema({
    theaterName: {
      type: String,
      required: true,
    },
    seatCategory: [
      {
        categoryName: String,
        categoryPrice: Number,
        rowCount: Number,
        columnCount: Number,
        totalSeat: Number,
        bookedSeat: [Number],
      },
    ],
  })
);

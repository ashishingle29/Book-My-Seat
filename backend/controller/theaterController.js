const theaterModel = require("../Model/theaterModel");

exports.getTheater = async (req, res) => {
    try {
        let id = req.params.id;
        const theater = await theaterModel.findById(id);
        res.status(200).send({
            status: "success",
            data: {
                theater,
            },
        });
    } catch (err) {
        res.status(500).send({
            status: "fail",
            message: err,
        });
    }
};

exports.getAllTheater = async (req, res) => {
  try {
    let id = req.params.id;
    const theater = await theaterModel.find();
    res.status(200).send({
      status: "success",
      data: {
        theater,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err,
    });
  }
};


exports.addTheater = async (req, res) => {
  try {
    let data = req.body;

    for (let j = 0; j < data.seatCategory.length; j++) {
      const { columnCount, rowCount } = data.seatCategory[j];

      data.seatCategory[j].totalSeat = columnCount * rowCount;

      let n = data.seatCategory[j].totalSeat;
      data.seatCategory[j].bookedSeat = [];

      for (let i = 0; i < n; i++) {
        data.seatCategory[j].bookedSeat.push(0);
      }
    }

    const theater = await theaterModel.create(req.body);
    res.status(200).send({
      status: "success",
      data: {
        theater,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err,
    });
  }
};



exports.updateTheater = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;

    const { columnCount, rowCount } = data;

    data.totalSeat = columnCount * rowCount;
    let n = data.totalSeat;
    data.bookedSeat = [];

    for (let i = 0; i < n; i++) {
      data.bookedSeat.push(0);
    }

    const oldData = await theaterModel.findById(id);

    let newData = [...oldData.seatCategory, data];

    const theater = await theaterModel.findOneAndUpdate(
      { _id: id },
      { $set: { seatCategory: newData } },
      { new: true }
    );

    res.status(200).send({ status: "success", data: theater });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err,
    });
  }
};

exports.bookTicket = async (req, res) => {
  try {
    let id = req.params.id;

    let { categoryName, bookedSeat } = req.body;

    let oldData = await theaterModel.findById(id);

    let n = oldData.seatCategory.length;

    for (let i = 0; i < n; i++) {
      if (oldData.seatCategory[i].categoryName == categoryName) {
        oldData.seatCategory[i].bookedSeat = bookedSeat;
      }
    }

    let newData = [...oldData.seatCategory];

    const theater = await theaterModel.findOneAndUpdate(
      { _id: id },
      { $set: { seatCategory: newData } },
      { new: true }
    );

    res.status(200).send({ status: "success", data: theater });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err,
    });
  }
};

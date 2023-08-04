const Track = require("../models/trackModel");

exports.getTrack = async (req, res) => {
  try {
    const track = await Track.find({ userId: req.user._id });
    if (!track.length > 0)
      return res
        .status(400)
        .json({ status: "fail", message: "No track found!" });
    res.status(200).json({ status: "success", track });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

exports.createTrack = async (req, res) => {
  try {
    const { name, locations } = req.body;
    if (!name || !locations)
      return res
        .status(400)
        .json({ status: "fail", message: "All fields are required!!" });

    const track = await Track.create({ name, locations, userId: req.user._id });
    res.status(200).json({ status: "success", track });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

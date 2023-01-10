const TopicModel = require("../model/Topic_model");

exports.get_all_topic = async (req, res) => {
  try {
    // const topic = await TopicModel.find({}).populate("instructor").exec();
    const topic = await TopicModel.find({});
    res.status(200).json({
      message: "Data fetch succesfully",
      success: true,
      data: topic,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create_topic = async (req, res) => {
  try {
    const topic = new TopicModel({
      topic: req.body.topic,
      instructor: req.body.instructor,
      year: req.body.year,
    });
    try {
      await topic.save();
      res.status(200).json({ sucess: true, message: "topic data added" });
    } catch (err) {
      return res.status(201).json({ success: false, msg: err.message });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete_topic = async (req, res) => {
  try {
    const response = await TopicModel.deleteOne({ _id: req.params.id });
    response &&
      res.status(200).json({
        message: "data has been deleted",
        sucess: true,
        data: response,
      });
  } catch (err) {
    res.status(500).send(err);
  }
};

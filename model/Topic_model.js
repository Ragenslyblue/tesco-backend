const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TopicSchema = new Schema({
  topic: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  instructor: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
  year: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
const TopicModel = mongoose.model("Topic", TopicSchema);
module.exports = TopicModel;

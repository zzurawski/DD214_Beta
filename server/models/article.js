const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const article = model("article", articleSchema);

module.exports = article;

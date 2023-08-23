const mongoose = require("mongoose");

const { Schema } = mongoose;
//const bcrypt = require("bcrypt");

const sponsorSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: Image,
    required: true,
  },
});

/*userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
}); */

/*userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}; */

const Sponsor = mongoose.model("sponsor", sponsorSchema);

module.exports = Sponsor;

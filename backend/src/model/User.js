const mongoose = require('../database/database');

const bcryptjs = require('bcryptjs');

const UserDetailSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String
  },
  {
    collection: "UserInfo",
  }
);
UserDetailSchema.pre("save", async function(next){
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
})

const User = mongoose.model('User', UserDetailSchema);

module.exports = User;
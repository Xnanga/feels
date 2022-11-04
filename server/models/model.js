const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     id: {
//       type: String,
//       required: true,
//     },
//     userName: {
//       type: String,
//       required: true,
//     },

//     password: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model('User', userSchema);

module.exports = User;

const { Shema, model, ObjectId } = require('mongoose')


const User = new Shema({
  email: { type: String, requred: true, unique: true },
  password: { type: String, requred: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: ObjectId, ref: 'File' }]
})


model.exports = model('User', User)
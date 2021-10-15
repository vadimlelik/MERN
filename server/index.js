const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const app = express()
const PORT = config.get('serverPort')

app.use(express.json())
app.use('/api/auth', authRouter)



const start = async () => {


  await mongoose.connect(config.get('dbUrl'))

  try {
    app.listen(PORT, () => {
      console.log('server started ' + PORT);
    })
  } catch (error) {
    console.log(error);
  }

}
start()
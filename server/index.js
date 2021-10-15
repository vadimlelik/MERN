const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('serverPort')

const app = express()


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
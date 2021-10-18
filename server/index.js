const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)



const start = async () => {


  await mongoose.connect(config.get('dbUrl'),{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })

  try {
    app.listen(PORT, () => {
      console.log('server started ' + PORT);
    })
  } catch (error) {
    console.log(error);
  }

}
start()
const express = require('express')

require('./db/mongoose')

const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
   const token = jwt.sign({ _id: 'userid' }, 'secretOrPrivateKey', { expiresIn: '7 days' })
   console.log(token)

   console.log(jwt.verify(token, 'secretOrPrivateKey'))
}

myFunction()
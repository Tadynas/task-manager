const express = require('express')

require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('62e90c0c0e124f6083a13c28')
    // await task.populate('owner')
    // console.log(task.owner)

    const user = await User.findById('62e909630e124f6083a13c23')
    await user.populate({ path: 'tasks', strictPopulate: false })
    console.log(user.tasks)
}

main()
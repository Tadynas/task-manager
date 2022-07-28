require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('62e13704df490616f9e90828', { age: 18 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 18 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('62e13de04a16ab7e0ca402ec', 5).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})
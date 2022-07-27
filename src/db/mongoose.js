const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0 ) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const ted = new User({
    name: 'Ted',
    email: 'Ted@gmail.com',
})

ted.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Errror!', error)
})
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.DATABASE_URI)
        await mongoose.connect('mongodb://127.0.0.1/business_card_app')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
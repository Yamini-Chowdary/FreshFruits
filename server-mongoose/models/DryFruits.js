const mongoose = require('mongoose')

const DryFruitsSchema = new mongoose.Schema({
    title: { // Property/Filed title
        type: String, // Data type of the Property
        required: true // Nullable(false) or NotNullable(true) 
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // unique:true
    },
})

const DryFruits = mongoose.model("DryFruits", DryFruitsSchema)

module.exports = DryFruits



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 
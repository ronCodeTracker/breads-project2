


// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 



const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: String,
    image: {
        type: String, default: 'https://www.bing.com/th?id=OIP.CWnGmX6OTYSUMNPWa6FSmAHaE8&w' +
            '=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
    },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker'
        
    }
})


// helper methods 
breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}


const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread




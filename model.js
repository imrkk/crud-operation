
const mongoose = require('mongoose');
const firstSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }

})
                                // firsts --> file in my mongodb atlas
const firstModel = mongoose.model('firsts',firstSchema);
module.exports = firstModel;
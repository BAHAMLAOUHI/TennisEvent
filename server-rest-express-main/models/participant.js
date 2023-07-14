const mongoose=require('mongoose')

const Schema =mongoose.Schema

const participantSchema= new Schema({
    nom:{
        type:String,
        required: true
    },
    prenom:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    telephone:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required: true
    },
     image:{
        type:String,
        required: true
    }

},
{timestamps: true}
)


module.exports = mongoose.model('participant',participantSchema)
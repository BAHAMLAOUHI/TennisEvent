const mongoose=require('mongoose')

const Schema =mongoose.Schema

const intervenantSchema= new Schema({
    nom:{
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


module.exports = mongoose.model('Intervenants',intervenantSchema)
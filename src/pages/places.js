const mongoose = require('mongoose');
const {Schema} = mongoose;

const PlacesSchema = new Schema({
    title: String,
    address: {type:String},
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: {type:String},
    checkIn : Number,
    checkOut : Number,
    maxGuests: Number,
    
    
   
});

const PlaceModel= mongoose.model("Place", PlacesSchema);

module.exports = UserModel;
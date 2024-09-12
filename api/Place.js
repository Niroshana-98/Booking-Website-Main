import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
    title: String,
    address: String,
    photo: [String],
    description: String,
    perks: [String],
    extraInfor: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
});
const PlaceModel = mongoose.model('Place', PlaceSchema);
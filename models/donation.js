const mongoose = require('./connection')

// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const DonationSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    fromState: { type: String, required: true },
    fromCity: { type: String, required: true },
    address1: { type: String, required: true },
    address2: String,
    zipcode: { type: String, required: true },
    deviceType: { type: String, required: true },
    isPC: { type: String, required: true },
    brand: { type: String, required: true },
    modelType: { type: String, required: true },
    quantityToDonate: { type: Number, required: true },
    isPickup: { type: String, required: true },
    donateDate: { type: String, required: true }
});


const Donation = model("Donation", DonationSchema);
module.exports = Donation
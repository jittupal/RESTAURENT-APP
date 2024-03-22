import mongoose from "mongoose";
import validator from "validator";

const reservationschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "First Name must conatins minimum 3 characters!"],
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "Last Name must conatins minimum 3 characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Enter a Valid email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must conatins minimum 10 digit!"],
        maxLength: [10, "Phone number should be 10 digit!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

export const reservation = mongoose.model('reservation', reservationschema);
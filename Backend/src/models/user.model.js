import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure that email is unique
    },
    userName: {
        type: String,
        unique: true,  // Ensure that userName is unique
        sparse: true,  // This allows multiple documents with userName as `null` or undefined
    },
    role: {
        type: String,
        required: true,
        default: "CUSTOMER"
    },
    mobile: {
        type: String,
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }],
    paymentInformantion: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_information"
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings"
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("users", userSchema);
export default User;

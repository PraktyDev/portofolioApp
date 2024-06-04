import { Schema, model, models } from 'mongoose'

const ContactSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    company: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    message: {
        type: String,
        required: [true, 'Please write a message']
    },
},{ timestamps: true });

// creating a model for the database
export const Contact = models?.Contact || model("Contact", ContactSchema)
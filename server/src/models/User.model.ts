import { Schema, model } from "mongoose";

// Message Schema
 const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// User Schema
 const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});


export const UserModel = model('User', userSchema)
export const MessageModel = model('Message', messageSchema)
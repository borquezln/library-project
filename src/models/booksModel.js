import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: false,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    publishedDate: {
        type: Date,
        required: false,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    isbn: {
        type: String,
        required: false,
        unique: true,
        trim: true,
    },
    },
    {
        timestamps: true,
        collection: 'books',
    }
);

const Book = model('Book', bookSchema);
export { Book };

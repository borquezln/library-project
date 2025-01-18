import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const bookSchema = new Schema(
    {
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
        publishedDate: {
            type: Date,
            required: false,
        },
        publisher: {
            type: String,
            required: false,
            trim: true,
        },
        isbn: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        observations: {
            type: String,
            required: false,
            trim: true,
        },
        description: {
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
    },
    {
        versionKey: false,
        timestamps: true,
        collection: 'books',
    }
);

bookSchema.post('save', function(error, doc, next) {
    if (error) {
        next(error);
    }
    next();
});

bookSchema.post('findOneAndUpdate', function(error, doc, next) {
    if (error) {
        next(error);
    }
    next();
});

bookSchema.post('findOneAndDelete', function(error, doc, next) {
    if (error) {
        next(error);
    }
    next();
});

const Book = model('Book', bookSchema);
export { Book };

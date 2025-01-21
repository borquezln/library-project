import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        collection: 'users',
    }
);

userSchema.post('save', function(error, doc, next) {
    if (error) {
        next(error);
    }
    next();
});

// userSchema.post('findOneAndUpdate', function(error, doc, next) {
//     if (error) {
//         next(error);
//     }
//     next();
// });

// userSchema.post('findOneAndDelete', function(error, doc, next) {
//     if (error) {
//         next(error);
//     }
//     next();
// });

const User = model('User', userSchema);
export { User };

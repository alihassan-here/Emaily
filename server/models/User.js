const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    googleId: {
        type: String,
    }
}, {
    timestamps: true,
});

mongoose.model('users', userSchema);

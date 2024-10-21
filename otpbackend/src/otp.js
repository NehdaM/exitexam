const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nedhamohd723:ned=hda123@cluster0.r0txt.mongodb.net/");

new Schema = mongoose.Schema;
new otpSchema = new Schema({
    email:string
});

var otp = mongoose.model('otp',otpSchema);
module.exports = otp;
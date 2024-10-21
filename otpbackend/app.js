// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const crypto = require('crypto');
// const app = express();
// const port = 3000;


// const transporter = nodemailer.createTransport({
//   host: 'live.smtp.mailtrap.io',
//   port: 587,
//   secure: false,
//   auth: {
//     user: '1a2b3c4d5e6f7g',
//     pass: '1a2b3c4d5e6f7g',
//   }
// });


// const mailOptions = {
//   from: 'yourusername@email.com',
//   to: 'yourfriend@email.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log('error',error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use your email provider
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password', // use environment variables for security
  },
});

// Endpoint to send OTP
app.post('/send-otp', (req, res) => {
  const { email } = req.body;

  // Generate a random OTP
  const otp = crypto.randomInt(100000, 999999).toString();

  // Send OTP via email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to send OTP' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ message: 'OTP sent successfully' });
    }
  });
});


app.post('/otpsend', (req,res) {
    const {email} = req.body;
    const otp = otpgen();
})




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

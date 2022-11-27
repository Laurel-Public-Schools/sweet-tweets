/* jshint node: true */
"use strict";

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    // port: 587,
    secure: true,
    // requireTLS: true,
    auth: {
        user: "noreply@poshdevelopment.com",
        pass: "YOUR_PASSWORD_HERE" 
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Posh Development <noreply@poshdevelopment.com>', // sender address
    to: 'kkleidal@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: 'Hello world' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
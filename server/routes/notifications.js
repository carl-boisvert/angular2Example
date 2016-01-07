var models = require('../models');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET a team */
router.post('/contact', function(req, res, next) {
    var mailOptions = {
        from: req.body.email, // sender address
        to: process.env.CONTACT_EMAIL, // list of receivers
        subject: 'Contact form', // Subject line
        html: '<p>'+req.body.email+'</p></p><p>'+req.body.message+'</p>' // You can choose to send an HTML body instead
    };
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.CONTACT_EMAIL, // Your email id
            pass: process.env.CONTACT_EMAIL_PASSWORD // Your password
        }
    });

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
});

module.exports = router;


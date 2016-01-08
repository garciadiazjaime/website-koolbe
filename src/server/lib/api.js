const express = require('express');
const router = express.Router();
const conf = require('../../../config.js');
const sendgrid = require('sendgrid')(conf.get('sendgrid'));


router.post('/send_email', function(req, res) {
    const fromname = req.body.fromname;
    const replyto = req.body.replyto;
    const subject = req.body.subject;
    const html = req.body.html;

    const email = new sendgrid.Email({
        to: conf.get('email'),
        from: conf.get('email'),
        fromname: fromname,
        replyto: replyto,
        subject: subject,
        bcc: ['info@mintitmedia.com'],
        html: html
    });

    sendgrid.send(email, function(err, json) {
        let response = true;
        if (err) {
            console.error(err);
            response = false;
        }
        res.send({
            status: response
        });
    });
});

module.exports = router;

const nodemailer = require('../config/nodemailer');
const nodeMailer = require('../config/nodemailer');

// this is another way of exporting a method
exports.newCommet = (comment) => {
    // console.log('inside newCommet mailer', comment);
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from: 'kkapi891@gmail.com',
        to: comment.user.email,
        subject: "new comment published!",
        // html: '<h1>yup, your comment is now published!</h1>'
        html: htmlString
    }, (err, info) => {
        if(err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message Sent', info);
        return;
    });
}
// npm install nodemailer to install it locally for each project
// an async is something that will take time to verify so you have to await
// to be able to generate password to send an email, go to your google account, navigate to security, navigate to two step verification, then to app password, follow the instructions then generate a password to fill in email.

const sendEmail = () => {
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  var mailOptions = {
    from: "",
    to: "",
    subject: "greetings from chiamaka",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = { sendEmail };

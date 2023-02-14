const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yahoomail",
  auth: {
    user: "jadlafayrouz@yahoo.fr",
    pass: "",
  },
});

const mailOptions = {
  from: "jadlafayrouz@yahoo.fr",
  to: "jadlafayrouz@yahoo.fe",
  subject: "Sending Email using Node.js",
  text: "hello",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

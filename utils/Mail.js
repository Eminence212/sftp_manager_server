const nodemailer = require("nodemailer");
dotenv.config();

export const sentMail = (to, subject, message) => {
  const transport = nodemailer.createTransport("SMTP",{
    // host: 'smtp-mail.outtlook.com',
    // secureConnection: false,
    // port: 587,
    // tls: {
    //   ciphers:"SSLv3"
    // },
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const options = {
    from: process.env.EMAIL_SENDER,
    to,
    subject,
    text: message,
  };
  transport.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

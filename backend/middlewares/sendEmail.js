const nodeMailer=require('nodemailer');

exports.sendEmail=async (options)=>{
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2497b7ebfd9eeb",
          pass: "9e7f6cb2760ec4"
        }
      });
     const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    }
    await transporter.sendMail(mailOptions);
}
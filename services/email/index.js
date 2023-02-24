const sgMail = require("@sendgrid/mail");
const { createHttpException } = require("../../helpers");

const { SENDGRID_APY_KEY, MAIL_SENDER } = process.env;
sgMail.setApiKey(SENDGRID_APY_KEY);

const sendVerificationLetter = async (email, verificationToken) => {
  try {
    await sgMail.send({
      from: MAIL_SENDER,
      to: email,
      subject: "Verify your email",
      html: `<a href="http://localhost:3000/api/auth/email/verify/${verificationToken}">Click HERE to verify your email</a>`,
    });
    console.log("Email is send");
  } catch (err) {
    throw createHttpException(502, "SENDGRID_Error");
  }
};

module.exports = {
  sendVerificationLetter,
};

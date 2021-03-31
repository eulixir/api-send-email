import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

require('dotenv').config();

export interface ProcessEnv {
  [key: string]: string | undefined;
}

export const sendEmail = (
  nature,
  name,
  gender,
  civil_state,
  rg,
  cpf,
  birth_date,
  birth_local,
  country,
  address,
  cep,
  city,
  state,
  phone,
  telephone,
  enterprise,
  enterprise_address,
  enterprise_city,
  enterprise_state,
  enterprise_phone,
  ramal,
  retired,
  admission_date,
  affiliation_date,
  role,
  email
) => {
  // console.log(process.env.EMAIL);
  // console.log(process.env.PASSWORD);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'jotalmeida007@homail.com',
    subject: 'Reset your password',
    html:
      '<p>We heard that you lost your PcExpress password. Sorry about that!</p><p>But don’t worry! You can use the following code to reset your password</p>',
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err + 'send email fail');
    } else {
      console.log('Email send 🚀');
    }
  });
};

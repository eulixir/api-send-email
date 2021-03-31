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
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Dados de ' + name,
    html:
      '<p>Os dados de ' +
      name +
      ' estao todos aqui: </p> ' +
      '<b>Natureza</b>: </b>' +
      nature +
      '<br/><br/>' +
      '<b>Gênero: </b>' +
      gender +
      '<br/><br/>' +
      '<b>Estado Civil : </b>' +
      civil_state +
      '<br/><br/>' +
      '<b>RG: </b>' +
      rg +
      '<br/><br/>' +
      '<b>CPF: </b>' +
      cpf +
      '<br/><br/>' +
      '<b>Data de Nascimento: </b>' +
      birth_date +
      '<br/><br/>' +
      '<b>Local de Nascimento: </b>' +
      birth_local +
      '<br/><br/>' +
      '<b>Nacionalidade: </b>' +
      country +
      '<br/><br/>' +
      '<b>Endereço : </b>' +
      address +
      '<br/><br/>' +
      '<b>Cep : </b>' +
      cep +
      '<br/><br/>' +
      '<b>Cidade : </b>' +
      city +
      '<br/><br/>' +
      '<b>Estado : </b>' +
      state +
      '<br/><br/>' +
      '<b>Celular : </b>' +
      phone +
      '<br/><br/>' +
      '<b>Telefone : </b>' +
      telephone +
      '<br/><br/>' +
      '<b>Empresa : </b>' +
      enterprise +
      '<br/><br/>' +
      '<b>Endereço da empresa : </b>' +
      enterprise_address +
      '<br/><br/>' +
      '<b>Cidade da empresa : </b>' +
      enterprise_city +
      '<br/><br/>' +
      '<b>Estado da empresa : </b>' +
      enterprise_state +
      '<br/><br/>' +
      '<b>Telefone da empresa : </b>' +
      enterprise_phone +
      '<br/><br/>' +
      '<b>Ramal : </b>' +
      ramal +
      '<br/><br/>' +
      '<b>Aposentado : </b>' +
      retired +
      '<br/><br/>' +
      '<b>Data de admissão : </b>' +
      admission_date +
      '<br/><br/>' +
      '<b>Data de afiliação : </b>' +
      affiliation_date +
      '<br/><br/>' +
      '<b>função </b>: ' +
      role +
      '<br/><br/>' +
      '<b>E-mail : </b>' +
      email,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err + 'sended email fail');
    } else {
      console.log('Email sended 🚀');
    }
  });
};

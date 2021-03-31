import express, { response } from 'express';
import { sendEmail } from './routes/send-email';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.post('/', (req, res) => {
  const {
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
    email,
  } = req.body;

  sendEmail(
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
  );

  res.send({
    name: name,
    gender: gender,
    civil_state: civil_state,
    nature: nature,
    rg: rg,
    cpf: cpf,
    birth_date: birth_date,
    birth_local: birth_local,
    country: country,
    address: address,
    cep: cep,
    city: city,
    state: state,
    phone: phone,
    telephone: telephone,
    enterprise: enterprise,
    enterprise_address: enterprise_address,
    enterprise_city: enterprise_city,
    enterprise_state: enterprise_state,
    enterprise_phone: enterprise_phone,
    ramal: ramal,
    retired: retired,
    admission_date: admission_date,
    affiliation_date: affiliation_date,
    role: role,
    email: email,
  });
});

export { app };

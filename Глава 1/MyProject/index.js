import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
const __dirname = path.resolve();

app.get('/home', (req, res) => {
  res.sendFile(`${__dirname}/public/Homepage.html`);
});

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/public/Loginpage.html`);
});

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();

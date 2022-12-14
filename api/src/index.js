const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { talkerRouter, loginRouter } = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '9000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});

import React, { useState } from 'react';
import { Button, Chip, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { postData } from '../requestAPI';

export default function PostTalker() {
  const [token, setToken] = useState();
  const [status, setStatus] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [headerIndex, setHeaderIndex] = useState(0);

  const possibleHeaders = [
    { "authorization": "k4mc04mnd8rlfowe" },
    { "authorization": "" },
    { "authorization": "tokencurto" },
    { "authorization": "tokendemasiadamentelongo" }
  ];
  const possibleBodies = [
    {
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    },{
      "name": "",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    },{
      "name": "Da",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    },{
      "name": "Danielle Santos",
      "age": "",
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    },{
      "name": "Danielle Santos",
      "age": 15,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    },{
      "name": "Danielle Santos",
      "age": 56,
      "talk": ""
    },{
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "",
        "rate": 5
      }
    },{
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "data/invalida",
        "rate": 5
      }
    },{
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": ""
      }
    },{
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 599856534
      }
    }
  ];

  const handleRequest = async () => {
    const { data, status } = await postData(
      '/talker',
      possibleBodies[bodyIndex],
      { headers: possibleHeaders[headerIndex] },
    );
    setToken(data);
    setStatus(status);
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleBodyChange = (direction) => {
    if (direction === 1 && bodyIndex === 9) return setBodyIndex(0);
    if (direction === -1 && bodyIndex === 0) return setBodyIndex(9);
    return setBodyIndex(bodyIndex + direction);
  }

  const handleHeaderChange = (direction) => {
    if (direction === 1 && headerIndex === 3) return setHeaderIndex(0);
    if (direction === -1 && headerIndex === 0) return setHeaderIndex(3);
    return setHeaderIndex(headerIndex + direction);
  }

  return (
    <>
      <IconButton size="small" onClick={handleDetails}>
        {showDetails
          ? <ArrowDropDownIcon fontSize="inherit" />
          : <ArrowRightIcon fontSize="inherit" />
        }
      </IconButton>
      <Chip label="POST" color="secondary" sx={{ marginRight: 2 }} />/talker
      <Typography variant="body2" hidden={!showDetails}>
        Retorna o objeto enviado no corpo com mais o id criado para confirmar o cadastro de um novo palestrante
      </Typography>
      <Typography variant="body2" hidden={!showDetails}>
        Retorna uma mensagem de erro caso não haja um token nos cabeçalhos da requisição ou ele esteja inválido
      </Typography>
      <Typography variant="body2" hidden={!showDetails}>
        Retorna uma mensagem de erro caso algum dado do corpo esteja incorreto
      </Typography>
      <hr />
      <Typography variant="h6" component="div" textAlign="center" textTransform="uppercase">Request</Typography>
      <Typography variant="body2">Header:</Typography>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <IconButton onClick={() => handleHeaderChange(-1)}>
          <ArrowCircleLeftIcon />
        </IconButton>
        <Paper sx={{ padding: '0.3em 1em', marginTop: 1, width: '50%' }}>
          <code>
            <pre>
              {JSON.stringify(possibleHeaders[headerIndex], undefined, 2)}
            </pre>
          </code>
        </Paper>
        <IconButton onClick={() => handleHeaderChange(1)}>
          <ArrowCircleRightIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2">Body:</Typography>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <IconButton onClick={() => handleBodyChange(-1)}>
          <ArrowCircleLeftIcon />
        </IconButton>
        <Paper sx={{ padding: '0.3em 1em', marginTop: 1, width: '50%' }}>
          <code>
            <pre>
              {JSON.stringify(possibleBodies[bodyIndex], undefined, 2)}
            </pre>
          </code>
        </Paper>
        <IconButton onClick={() => handleBodyChange(1)}>
          <ArrowCircleRightIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" marginTop={2}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value="http://localhost:9000/talker"
          disabled
        />
        <Button
          variant="contained"
          sx={{ height: 'fit-content' }}
          onClick={handleRequest}
        >
          GO
        </Button>
      </Stack>
      <hr />
      <Typography variant="h6" component="div" textAlign="center" textTransform="uppercase">Response</Typography>
      <Typography variant="body2" component="span">Status: </Typography>
      <Paper sx={{ padding: '0.3em 0.5em' }} component="span">{status}</Paper>
      <Typography variant="body2">Body:</Typography>
      <Paper sx={{ padding: '0.3em 1em', marginTop: 1 }}>
        <code>
          <pre>
            {JSON.stringify(token, undefined, 2)}
          </pre>
        </code>
      </Paper>
    </>
  );
}
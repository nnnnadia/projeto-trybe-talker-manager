import React, { useState } from 'react';
import { Button, Chip, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { requestData } from '../requestAPI';

export default function GetTalkerBySearchTerm() {
  const [searchTerm, setSearchTerm] = useState();
  const [talker, setTalker] = useState();
  const [status, setStatus] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [headerIndex, setHeaderIndex] = useState(0);

  const possibleHeaders = [
    { "authorization": "k4mc04mnd8rlfowe" },
    { "authorization": "" },
    { "authorization": "tokencurto" },
    { "authorization": "tokendemasiadamentelongo" }
  ];

  const handleRequest = async () => {
    const { data, status } = await requestData(
      `/talker/search?q=${searchTerm}`,
      { headers: possibleHeaders[headerIndex] },
    );
    setTalker(data);
    setStatus(status);
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleHeaderChange = (direction) => {
    if (direction === 1 && headerIndex === 3) return setHeaderIndex(0);
    if (direction === -1 && headerIndex === 0) return setHeaderIndex(3);
    return setHeaderIndex(headerIndex + direction);
  }

  return (<>
    <IconButton size="small" onClick={handleDetails}>
      {showDetails
        ? <ArrowDropDownIcon fontSize="inherit" />
        : <ArrowRightIcon fontSize="inherit" />
      }
    </IconButton>
    <Chip label="GET" color="success" sx={{ marginRight: 2 }} />/talker/search?q=searchTerm
    <Typography variant="body2" hidden={!showDetails}>
      Retorna um array com os palestrantes que contenham em seu nome o termo buscado
    </Typography>
    <Typography variant="body2" hidden={!showDetails}>
      Retorna uma mensagem de erro caso não haja um token nos cabeçalhos da requisição ou ele esteja inválido
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
    <Stack direction="row" spacing={2} alignItems="center" marginTop={2}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        value="http://localhost:9000/talker/search?q="
        disabled
      />
      <TextField
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
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
          {JSON.stringify(talker, undefined, 2)}
        </pre>
      </code>
    </Paper>
  </>);
}
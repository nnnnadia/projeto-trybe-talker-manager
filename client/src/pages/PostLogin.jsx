import React, { useState } from 'react';
import { Button, Chip, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { postData } from '../requestAPI';

export default function PostLogin() {
  const [token, setToken] = useState();
  const [status, setStatus] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [bodyIndex, setBodyIndex] = useState(0);

  const possibleLogins = [
    {
      "email": "email@email.com",
      "password": "123456"
    },{
      "email": "",
      "password": "123456"
    },{
      "email": "algoquenãoéumemail",
      "password": "123456"
    },{
      "email": "email@email.com",
      "password": ""
    },{
      "email": "email@email.com",
      "password": "123"
    },
  ];

  const handleRequest = async () => {
    const { data, status } = await postData('/login', possibleLogins[bodyIndex]);
    setToken(data);
    setStatus(status);
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleBodyChange = (direction) => {
    if (direction === 1 && bodyIndex === 4) return setBodyIndex(0);
    if (direction === -1 && bodyIndex === 0) return setBodyIndex(4);
    return setBodyIndex(bodyIndex + direction);
  }

  return (
    <>
      <IconButton size="small" onClick={handleDetails}>
        {showDetails
          ? <ArrowDropDownIcon fontSize="inherit" />
          : <ArrowRightIcon fontSize="inherit" />
        }
      </IconButton>
      <Chip label="POST" color="secondary" sx={{ marginRight: 2 }} />/login
      <Typography variant="body2" hidden={!showDetails}>
        Retorna um token dado o corpo com os dados corretos
      </Typography>
      <Typography variant="body2" hidden={!showDetails}>
        Retorna uma mensagem de erro caso algum dado do corpo esteja incorreto
      </Typography>
      <hr />
      <Typography variant="h6" component="div" textAlign="center" textTransform="uppercase">Request</Typography>
      <Typography variant="body2">Body:</Typography>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <IconButton onClick={() => handleBodyChange(-1)}>
          <ArrowCircleLeftIcon />
        </IconButton>
        <Paper sx={{ padding: '0.3em 1em', marginTop: 1, width: '50%' }}>
          <code>
            <pre>
              {JSON.stringify(possibleLogins[bodyIndex], undefined, 2)}
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
          value="http://localhost:9000/login"
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
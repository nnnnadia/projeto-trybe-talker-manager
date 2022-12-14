import React, { useState } from 'react';
import { Button, Chip, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { requestData, restartData } from '../requestAPI';

export default function GetTalker() {
  const [talkers, setTalkers] = useState();
  const [status, setStatus] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const handleRequest = async () => {
    const { data, status } = await requestData('/talker');
    setTalkers(data);
    setStatus(status);
  };

  const handleRestart = async () => {
    await restartData();
  }

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <IconButton size="small" onClick={handleDetails}>
        {showDetails
          ? <ArrowDropDownIcon fontSize="inherit" />
          : <ArrowRightIcon fontSize="inherit" />
        }
      </IconButton>
      <Chip label="GET" color="success" sx={{ marginRight: 2 }} />/talker
      <Typography variant="body2" hidden={!showDetails}>
        Retorna um array com os palestrantes cadastrados.
      </Typography>
      <Typography variant="body2" hidden={!showDetails}>
        Retorna um array vazio caso nenhum palestrante esteja cadastrado.
      </Typography>
      <hr />
      <Typography variant="h6" component="div" textAlign="center" textTransform="uppercase">Request</Typography>
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
            {JSON.stringify(talkers, undefined, 2)}
          </pre>
        </code>
      </Paper>
      <hr />
      <Button
        variant="contained"
        sx={{ height: 'fit-content' }}
        onClick={handleRestart}
      >
        POPULATE DATABASE
      </Button>
    </>
  );
}
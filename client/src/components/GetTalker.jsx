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

  return (<>
    <IconButton size="small" onClick={handleDetails}>
      {showDetails
        ? <ArrowDropDownIcon fontSize="inherit" />
        : <ArrowRightIcon fontSize="inherit" />
      }
    </IconButton>
    <Chip label="GET" color="success" sx={{ marginRight: 2 }} />/talker
    <Typography hidden={!showDetails}>
      Retorna um array com os palestrantes cadastrados ou retorna um array vazio caso nenhum palestrante esteja cadastrado.
    </Typography>
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
        value="http://localhost:9000/talker"
        disabled
      />
      <Button
        variant="contained"
        sx={{ height: 'fit-content' }}
        onClick={handleRequest}
      >
        REQUEST
      </Button>
    </Stack>
    <hr />
    <Typography variant="button" margin={2}>Status: {status}</Typography>
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
      POPULATE
    </Button>
  </>);
}
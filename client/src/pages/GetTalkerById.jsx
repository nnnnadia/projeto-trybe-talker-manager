import React, { useState } from 'react';
import { Button, Chip, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { requestData } from '../requestAPI';

export default function GetTalkerById() {
  const [id, setId] = useState(1);
  const [talker, setTalker] = useState();
  const [status, setStatus] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const handleRequest = async () => {
    const { data, status } = await requestData(`/talker/${id}`);
    setTalker(data);
    setStatus(status);
  };

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
    <Chip label="GET" color="success" sx={{ marginRight: 2 }} />/talker/:id
    <Typography variant="body2" hidden={!showDetails}>
      Retorna um objeto com os dados do palestrante com o mesmo id informado na rota
    </Typography>
    <Typography variant="body2" hidden={!showDetails}>
      Retorna uma mensagem de erro caso nenhum palestrante seja encontrado
    </Typography>
    <hr />
    <Typography variant="h6" component="div" textAlign="center" textTransform="uppercase">Request</Typography>
    <Stack direction="row" spacing={2} alignItems="center" marginTop={2}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        value="http://localhost:9000/talker/"
        disabled
      />
      <TextField
        variant="outlined"
        size="small"
        value={id}
        onChange={({ target }) => setId(target.value)}
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
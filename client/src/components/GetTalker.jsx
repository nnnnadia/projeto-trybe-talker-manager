import { Button, Chip, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { requestData, restartData } from '../requestAPI';

export default function GetTalker() {
  const [talkers, setTalkers] = useState();

  const handleRequest = async () => {
    const data = await requestData('/talker');
    setTalkers(data);
  };

  const handleRestart = async () => {
    await restartData();
  }

  return (<>
    <Chip label="GET" color="success" sx={{ marginRight: 2 }} />/talker
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
    <code>
      <pre>
        {JSON.stringify(talkers, undefined, 2)}
      </pre>
    </code>
    <Button
      variant="contained"
      sx={{ height: 'fit-content' }}
      onClick={handleRestart}
    >
      POPULATE
    </Button>
  </>);
}
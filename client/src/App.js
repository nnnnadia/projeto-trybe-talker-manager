import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import GetTalker from './components/GetTalker';
import { clearData } from './requestAPI';

function App() {
  useEffect(() => {
    const startFile = async () => {
      await clearData();
    }
    startFile();
  }, []);

  return (
    <Container maxWidth="md" sx={{ paddingBottom: 2 }}>
      <Typography variant="h3" textAlign="end">Projeto Talker Manager</Typography>
      <Typography variant="overline" textAlign="end" component="div" gutterBottom>Nádia Dutra Tristão</Typography>
      <GetTalker />
    </Container>
  );
}

export default App;

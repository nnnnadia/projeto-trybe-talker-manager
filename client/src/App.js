import React, { useEffect } from 'react';
import { Container } from '@mui/material';
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
    <Container maxWidth="md">
      <GetTalker />
    </Container>
  );
}

export default App;

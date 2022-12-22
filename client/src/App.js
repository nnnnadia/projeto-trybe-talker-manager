import React, { useContext, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import GetTalker from './components/GetTalker';
import { clearData } from './requestAPI';
import Navigation from './components/Navigation';
import GetTalkerById from './components/GetTalkerById';
import Context from './context/Context';

function App() {
  const { indexAt } = useContext(Context);

  useEffect(() => {
    const startFile = async () => {
      await clearData();
    }
    startFile();
  }, []);

  const pages = [<GetTalker />, <GetTalkerById />];

  return (
    <>
      <Navigation />
      <Container maxWidth="md" sx={{ paddingBottom: 2 }}>
        <Typography variant="h3" textAlign="end">Projeto Talker Manager</Typography>
        <Typography variant="overline" textAlign="end" component="div" gutterBottom>Nádia Dutra Tristão</Typography>
        {pages[indexAt]}
      </Container>
    </>
  );
}

export default App;

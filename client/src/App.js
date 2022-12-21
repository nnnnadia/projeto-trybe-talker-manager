import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import GetTalker from './components/GetTalker';
import { clearData } from './requestAPI';
import Navigation from './components/Navigation';

function App() {
  const [indexAt, setIndexAt] = useState(0);

  useEffect(() => {
    const startFile = async () => {
      await clearData();
    }
    startFile();
  }, []);

  const pages = [<GetTalker />]

  return (
    <>
      <Navigation indexAt={indexAt} setIndexAt={setIndexAt} />
      <Container maxWidth="md" sx={{ paddingBottom: 2 }}>
        <Typography variant="h3" textAlign="end">Projeto Talker Manager</Typography>
        <Typography variant="overline" textAlign="end" component="div" gutterBottom>Nádia Dutra Tristão</Typography>
        {pages[indexAt]}
      </Container>
    </>
  );
}

export default App;

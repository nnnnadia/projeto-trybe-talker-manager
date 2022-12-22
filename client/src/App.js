import React, { useContext, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import GetTalker from './pages/GetTalker';
import { clearData } from './requestAPI';
import Navigation from './components/Navigation';
import GetTalkerById from './pages/GetTalkerById';
import Context from './context/Context';
import PostLogin from './pages/PostLogin';
import PostTalker from './pages/PostTalker';
import PutTalker from './pages/PutTalker';

function App() {
  const { indexAt } = useContext(Context);

  useEffect(() => {
    const startFile = async () => {
      await clearData();
    }
    startFile();
  }, []);

  const pages = [
    <GetTalker />,
    <GetTalkerById />,
    <PostLogin />,
    <PostTalker />,
    <PutTalker />
  ];

  return (
    <>
      <Navigation />
      <Container maxWidth="md" sx={{ paddingBottom: 2 }}>
        <Typography variant="h3" textAlign="end">Talker Manager Project</Typography>
        <Typography variant="overline" textAlign="end" component="div" gutterBottom>Nádia Dutra Tristão</Typography>
        {pages[indexAt]}
      </Container>
    </>
  );
}

export default App;

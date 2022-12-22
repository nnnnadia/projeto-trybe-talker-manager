import React from 'react';
import { Fab, Stack } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useContext } from 'react';
import Context from '../context/Context';

export default function Navigation() {
  const { indexAt, setIndexAt } = useContext(Context);

  return (
    <Stack spacing={2} sx={{ position: 'absolute', top: 50, left: 50 }}>
      <Fab color="primary" disabled={indexAt === 0} onClick={() => setIndexAt(indexAt - 1)}>
        <ArrowUpwardIcon />
      </Fab>
      <Fab color="primary">
        <MenuIcon />
      </Fab>
      <Fab color="primary" disabled={indexAt === 1} onClick={() => setIndexAt(indexAt + 1)}>
        <ArrowDownwardIcon />
      </Fab>
    </Stack>
  );
}
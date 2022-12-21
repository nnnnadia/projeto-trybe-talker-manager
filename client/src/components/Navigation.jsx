import React from 'react';
import { Fab, Stack } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Navigation(props) {
  const { indexAt, setIndexAt } = props;

  return (
    <Stack spacing={2} sx={{ position: 'absolute', top: 50, left: 50 }}>
      <Fab color="primary" disabled={indexAt === 0}>
        <ArrowUpwardIcon />
      </Fab>
      <Fab color="primary">
        <MenuIcon />
      </Fab>
      <Fab color="primary">
        <ArrowDownwardIcon />
      </Fab>
    </Stack>
  );
}
import React from 'react';
import { Fab, Menu, Stack } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useContext } from 'react';
import Context from '../context/Context';
import { useState } from 'react';
import MenuNavigationItems from './MenuNavigationItems';

export default function Navigation() {
  const { indexAt, setIndexAt } = useContext(Context);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack spacing={2} sx={{ position: 'absolute', top: 50, left: 50 }}>
        <Fab color="primary" disabled={indexAt === 0} onClick={() => setIndexAt(indexAt - 1)}>
          <ArrowUpwardIcon />
        </Fab>
        <Fab color="primary" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </Fab>
        <Fab color="primary" disabled={indexAt === 6} onClick={() => setIndexAt(indexAt + 1)}>
          <ArrowDownwardIcon />
        </Fab>
      </Stack>
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 150 }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <MenuNavigationItems />
      </Menu>
    </>
  );
}
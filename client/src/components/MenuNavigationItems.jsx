import React from 'react';
import { Chip, MenuItem } from '@mui/material';
import { useContext } from 'react';
import Context from '../context/Context';

export default function MenuNavigationItems() {
  const { setIndexAt } = useContext(Context);

  return(
    <>
      <MenuItem onClick={() => setIndexAt(0)}>
        <Chip
          label="GET"
          color="success"
          sx={{ marginRight: 2 }}
        />/talker
      </MenuItem>
      <MenuItem onClick={() => setIndexAt(1)}>
        <Chip
          label="GET"
          color="success"
          sx={{ marginRight: 2 }}
        />/talker/:id
      </MenuItem>
      <MenuItem onClick={() => setIndexAt(2)}>
        <Chip
          label="POST"
          color="secondary"
          sx={{ marginRight: 2 }}
        />/login
      </MenuItem>
      <MenuItem onClick={() => setIndexAt(3)}>
        <Chip
          label="POST"
          color="secondary"
          sx={{ marginRight: 2 }}
        />/talker
      </MenuItem>
      <MenuItem onClick={() => setIndexAt(4)}>
        <Chip
          label="PUT"
          color="warning"
          sx={{ marginRight: 2 }}
        />/talker
      </MenuItem>
      <MenuItem onClick={() => setIndexAt(5)}>
        <Chip
          label="DELETE"
          color="error"
          sx={{ marginRight: 2 }}
        />/talker/:id
      </MenuItem>
      <MenuItem onClick={() => setIndexAt(6)}>
        <Chip
          label="GET"
          color="success"
          sx={{ marginRight: 2 }}
        />/talker/search?q=searchTerm
      </MenuItem>
    </>
  );
}
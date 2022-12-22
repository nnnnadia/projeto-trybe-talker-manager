import React from 'react';
import { Chip, MenuItem } from '@mui/material';
import { useContext } from 'react';
import Context from '../context/Context';

export default function MenuNavigationItems(props) {
  const { setIndexAt } = useContext(Context);

  const { handleClose } = props;

  const handleChange = (pageIndex) => {
    setIndexAt(pageIndex);
    handleClose();
  }

  return(
    <>
      <MenuItem onClick={() => handleChange(0)}>
        <Chip
          label="GET"
          color="success"
          sx={{ marginRight: 2 }}
        />/talker
      </MenuItem>
      <MenuItem onClick={() => handleChange(1)}>
        <Chip
          label="GET"
          color="success"
          sx={{ marginRight: 2 }}
        />/talker/:id
      </MenuItem>
      <MenuItem onClick={() => handleChange(2)}>
        <Chip
          label="POST"
          color="secondary"
          sx={{ marginRight: 2 }}
        />/login
      </MenuItem>
      <MenuItem onClick={() => handleChange(3)}>
        <Chip
          label="POST"
          color="secondary"
          sx={{ marginRight: 2 }}
        />/talker
      </MenuItem>
      <MenuItem onClick={() => handleChange(4)}>
        <Chip
          label="PUT"
          color="warning"
          sx={{ marginRight: 2 }}
        />/talker
      </MenuItem>
      <MenuItem onClick={() => handleChange(5)}>
        <Chip
          label="DELETE"
          color="error"
          sx={{ marginRight: 2 }}
        />/talker/:id
      </MenuItem>
      <MenuItem onClick={() => handleChange(6)}>
        <Chip
          label="GET"
          color="success"
          sx={{ marginRight: 2 }}
        />/talker/search?q=searchTerm
      </MenuItem>
    </>
  );
}
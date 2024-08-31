import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Practice1() {
  return (
    <Stack spacing={2} direction="row">
   
      <Button variant="contained" color='error' size='medium'>Click</Button>
      <br></br>
      <Button variant="contained" style={{backgroundColor:"purple"}} size='medium'>Click</Button>
    
    </Stack>
  );
}

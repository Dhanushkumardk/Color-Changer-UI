import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Drop.css';

const options = [
  {
      label:'Lime',
      value:'lime'
  },
  {
      label:'Lavender',
      value:'lavender'
  },
  {
      label:'Crimson',
      value:'crimson'
  },
  {
      label:'Darkblue',
      value:'darkblue'
  },
  {
      label:'Teal',
      value:'teal'
  },
  {
      label:'Rebecca Purple',
      value:'rebeccapurple'
  },
  {
      label:'Ghost White',
      value:'ghostwhite'
  },
  {
      label:'Aqua Marine',
      value:'aquamarine'
  },
  {
      label:'Alice blue',
      value:'aliceblue'
  },
];

export default function ColorSelect() {
  const [option, setOption] = React.useState('Lime');

  const handleChange = (cc) => {
    setOption(cc.target.value);
  };

  return (
    <div>
        <h1 align="center">COLOR CHANGER</h1>
    <Box component="form"
      sx={{
        '& .MuiTextField-root': {width: '45ch'},
      }}
      noValidate
      autoComplete="off">
        <TextField
          id="outlined-select-currency"
          select
          value={option}
          onChange={handleChange}
      style={{color:option,backgroundColor:option }} >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
    </Box >
    <div className='Container' style={{backgroundColor:option}}>
    </div>
    <div className='body' onChange={handleChange}
      style={{color:option,backgroundColor:option }} >

    </div>
    </div>
  );
}

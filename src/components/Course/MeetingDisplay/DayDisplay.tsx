import { Box } from '@mui/material';
import React from 'react'

function DayDisplay({
  activated,
  dayLetter
}:
{activated: boolean,
dayLetter: string}
) {
  const style ={
      width: '20px',
      height: '20px',
      lineHeight: '20px',
      textAlign: 'center',
      border: '1px solid #ddd',
      userSelect: 'none',
      backgroundColor: activated ? '#007bff' : 'transparent',
      color: activated ? 'white' : 'black',
      borderColor: activated ? '#0056b3' : '#ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
  };

  return (
    <Box sx={style}>
      {dayLetter}
    </Box>
  );
}

export default DayDisplay
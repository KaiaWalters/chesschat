import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';

export default function LabTabs({children, moves}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{}}>
            <Tab label="Comments" value="1" />
            <Tab label="Moves" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          { children[0] }
        </TabPanel>
        <TabPanel value="2">
          {moves.map((move, index) => (
            <ChessPiece key={index} piece={getChessPiece(move.playerMove.piece)} move={move}/>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}


const getChessPiece = (pieceType)  => {
  switch (pieceType.toLowerCase()) {
    case 'k':
      return '♔';
    case 'q':
      return '♕';
    case 'r':
      return '♖';
    case 'b':
      return '♗';
    case 'n':
      return '♘';
    case 'p':
      return '♙';
    default:
      return 'Invalid piece type';
  }
}

const ChessPiece = ({piece, move}) => {
  console.log("MOVE",move)
  return (
    <Box flexDirection={'row'}>
       <Typography sx={{}}>
          {piece}{move.playerMove.to}
       </Typography>
    </Box>
  )
}

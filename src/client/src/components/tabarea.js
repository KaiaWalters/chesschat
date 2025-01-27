import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

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
            <li key={index}>{JSON.stringify(move.data)}</li>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
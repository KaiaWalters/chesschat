import './App.css';
import ChessBoard from './components/chessboard';
import CommentSection from './components/comments';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  let [dataStore, setDataStore] = useState({})
  
  useEffect(() => {
    if ( dataStore !== null) {
      console.log("Turn data updated:", dataStore);
    }
  }, [dataStore])

  const callback = (data) => {
    setDataStore({
      currentMove: data 
    })
  };

  return (
    <div className="App">
      <Box display='flex' flexDirection={'column'} justifyItems={'center'} margin={'50px'}>
        <ChessBoard callback={callback}/>
        <CommentSection data={dataStore}/>
      </Box>
    </div>
  )
}

export default App;

//TODO General: 
//access to our comments 
//comments need to be displayed on cards and saved as an array 
// comments need to be posted to api to be handled 
//then we rip out the data store since this can happen externally 
// also the loging for cleaning up the moves should not be on the client side since it leaves that feature vulnerable

//TODO Infrastructure: 
// Set up mono repo 
// Make gitignore apply to child directories 

//TODO Error Handling 
// no move, disable comments 
// no data sent


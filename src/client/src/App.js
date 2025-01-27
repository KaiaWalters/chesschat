import ChessBoard from './components/chessboard';
import PlayerCards from './components/playerbox';
import { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/system';
import CommentSection from './components/comments';
import TabbedArea from './components/tabarea';
import {Box} from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  let [moves, setMoves] = useState([])
  
  useEffect(() => {
    if ( moves !== null) {
      console.log("Turn data updated:", moves);
    }
  }, [moves])

  const callback = (playerMove) => {
    setMoves([
      ...moves,
      {playerMove}
    ])
    console.log("player moved",playerMove)
  };

  return (
    <Box>
      <Grid container spacing={2} margin={'64px'}>
        <Grid justifyContent='center' size={{sm:2, md:4, lg:6}}>
            <PlayerCards/>
              <ChessBoard callback={callback}/> 
            <PlayerCards/>
        </Grid>
        <Grid sx={{background:'#A9AFB1'}} size={{sm: 4, md: 6, lg: 6}} padding="32px">
          <TabbedArea children={[<CommentSection moves={moves}/>]} moves={moves}/>
        </Grid>
      </Grid>
    </Box>
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


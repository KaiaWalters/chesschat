import './App.css';
import ChessBoard from './components/chessboard';
import CommentSection from './components/comments';
import { useState } from 'react';
import { useEffect } from 'react';

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
        <ChessBoard callback={callback}/>
        <CommentSection data={dataStore}/>
    </div>
  )
}

export default App;

//TODO: 
//access to our comments 
//comments need to be displayed on cards and saved as an array 
// comments need to be posted to api to be handled 
//then we rip out the data store since this can happen externally 
// also the logig for cleaning up the moves should not be on the client side since it leaves that feature vulnerable


//TODO Infrastructure: 
// Set up mono repo 
// Make gitignore apply to child directories 
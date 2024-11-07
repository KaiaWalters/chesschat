import './App.css';
import ChessBoard from './components/chessboard';
import CommentSection from './components/comments';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  let [dataStore, setDataStore] = useState({})

  const callback = (data) => {
    setDataStore({
      currentMove: data, 
      comments: 
    })
  };

  useEffect(() => {
    if ( dataStore !== null) {
      console.log("Turn data updated:", dataStore);
    }
  }, [dataStore])

  return (
    <div className="App">
        <ChessBoard callback={callback}/>
        <CommentSection data={dataStore}/>
    </div>
  )
}

export default App;

import { useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  const [showText, setShowText] = useState(false);


  return (
   <div>
    <Header/>
    <Main/>
    <p>here something missing</p>
   </div>
  );
}

export default App;

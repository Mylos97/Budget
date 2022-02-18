import logo from './logo.svg';
import { DataShower, Header, Expenses, Popup } from './Components'
import { useState, useRef } from 'react';


function App() {

  const [showPopup, setShowPopup] = useState(false)
  
  const doUpdate = useRef((someNewValue) => {
    setTimeout(() => {
      setShowPopup(someNewValue);
    }, 0);
  }).current;


  return (
    <div className="main">
      <Header />
      <Expenses popup={doUpdate}/> 
      {showPopup && 
        <Popup closePopup={doUpdate} />
      }
    </div>
  );
}

export default App;

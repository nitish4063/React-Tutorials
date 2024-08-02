import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState('');

  const onButtonClick = (event, buttonName) => {
    console.log("clicked", event, buttonName)
    if(buttonName === 'C'){
      setCalVal('');
    }
    else if(buttonName === '='){
      const res = eval(calVal);
      setCalVal(res);
    }
    else{
      const newVal = calVal + buttonName;
      setCalVal(newVal);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}/>
      <ButtonsContainer onButtonClick = {onButtonClick} />
    </div>
  );
}

export default App;

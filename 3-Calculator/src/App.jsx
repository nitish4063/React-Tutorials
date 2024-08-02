
import styles from './App.module.css'
import Display from './components/Display'

function App() {

  return (
    <div className={styles.calculator}>
      <Display />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>C</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
      </div>
    </div>
  ) 
}

export default App

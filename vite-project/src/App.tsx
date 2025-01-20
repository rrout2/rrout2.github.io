import styles from './App.module.css'

function App() {
  return (
    <>
      <div className={styles.aboutMe}>
        <div className={styles.intro}>Hi, my name is Rishav!</div>
        <div>
          I am software engineer living in SF, with passions for:
          <ul style={{ margin: 0 }}>
            <li>public transit</li>
            <li>fantasy football</li>
            <li>safe streets</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

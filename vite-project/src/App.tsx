import styles from './App.module.css'
import { useWindowDimensions } from 'react-native';

function App() {
  const { height } = useWindowDimensions();
  return (
    <>
      <div className={styles.aboutMe} style={{ height: `${0.98 * height}px` }}>
        <div className={styles.intro}>Hi, my name is Rishav!</div>
        <div className={styles.bio}>
          I am software engineer living in SF, with passions for:
          <ul style={{ margin: 0 }}>
            <li>public transit</li>
            <li>fantasy football</li>
            <li>safe streets</li>
          </ul>
        </div>
        <div className={styles.disclaimer}>This site is currently under construction.</div>
      </div>
    </>
  )
}

export default App

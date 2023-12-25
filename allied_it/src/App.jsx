import styles from './style';
import {Navbar, Hero, Stats, Services, Testimonials, Contact } from "./components";

const App = () => (
  <div className='bg-primary w-full overflow-hideen'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
        <Stats/>
        <Services/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>

  </div>
)

export default App
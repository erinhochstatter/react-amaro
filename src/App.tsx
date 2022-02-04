import styles from './App.module.scss';
import { Header } from './components/Header'
import {RecipeList, Recipe} from './components/Recipes'
import { Routes, Route, Link } from "react-router-dom";
import snek from './assets/snek.svg'
import swagUpper from './assets/swag_upper.svg'
import swagLower from './assets/swag_lower.svg'
import sideDot from './assets/dot_side.svg'

function App() {
  return (
      <div className={styles.container}>
        <div className={styles.logotown}>
          <div className={styles.logotownLeft}>
            <img src={swagUpper} className={styles.swag} alt="a leafy boundary" />
            <img src={sideDot} className={styles.sideDot} alt="a leafy boundary" />
            <img src={swagLower} className={styles.swag} alt="a leafy boundary" />
          </div>
          <img src={snek} className={styles.snek} alt="a chalice with a snake for the stem" />
          <div className={styles.logotownRight}>
            <img src={swagUpper} className={styles.reverseSwag} alt="a leafy boundary" />
            <img src={sideDot} className={styles.sideDot} alt="a leafy boundary" />
            <img src={swagLower} className={styles.reverseSwag} alt="a leafy boundary" />
          </div>
        </div>
        <Header/>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="recipe" >
            <Route path=":recipeId" element={<Recipe />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </div>
  );
}
export default App;

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
  }
import styles from './App.module.scss';
import { Header } from './components/Header'
import {RecipeList, Recipe} from './components/Recipes'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className={styles.container}>
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
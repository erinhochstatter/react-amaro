import './App.scss'
import { Header } from './components/Header'
import {RecipeList} from './components/Recipes'

function App() {
  return (
      <div className="Amaro">
        <div>
          <Header/>
          <RecipeList />
        </div>
      </div>
  );
}

export default App;
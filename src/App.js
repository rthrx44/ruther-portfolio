import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import Landing from './pages/landing/Landing';
import { skillIcon, currentLearnSkill, covape } from './components/utils/Data'

function App() {
  return (
    <div className="App">
      <Landing skillIcon={skillIcon} currentLearnSkill={currentLearnSkill} covape={covape}/>
    </div>
  );
}

export default App;

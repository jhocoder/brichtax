import './assets/styles/Menu.css';
import './assets/styles/App.css';
import './assets/styles/primerbanner.css';
import './assets/styles/divisor.css'
import './assets/styles/segundobanner.css'
import './assets/styles/tercerbanner.css'
import Menu from './menu';
import PrimerBanner  from './primerbanner';
import Divisor from './divisores';
import Segundobanner from './segundobanner';
import TercerBanner from './tercerbanner';
import Cuartobanner from './cuartobanner';

function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <PrimerBanner />
      </div>
      <div>
        <Divisor />
      </div>
      <div><Segundobanner/></div>
      <div><TercerBanner/></div>
      <div><Cuartobanner/></div>
    </>
  );
}

export default App;